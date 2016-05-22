//#define DEV

#ifdef DEV
#include <SPI.h>
#define LOG(format, args...) snprintf(buf,sizeof(buf),format,args);Serial.println(buf);

char input;
char buf[80];
#else
#define LOG(format, args...)
#endif

#define portOfPin(P)  (((P)>=0&&(P)<8)?&PORTD:(((P)>7&&(P)<14)?&PORTB:&PORTC))
#define ddrOfPin(P) (((P)>=0&&(P)<8)?&DDRD:(((P)>7&&(P)<14)?&DDRB:&DDRC))
#define pinOfPin(P) (((P)>=0&&(P)<8)?&PIND:(((P)>7&&(P)<14)?&PINB:&PINC))
#define pinIndex(P) ((uint8_t)(P>13?P-14:P&7))
#define pinMask(P) ((uint8_t)(1<<pinIndex(P)))

#define pinAsInput(P) *(ddrOfPin(P))&=~pinMask(P)
#define pinAsInputPullUp(P) *(ddrOfPin(P))&=~pinMask(P);digitalHigh(P)
#define pinAsOutput(P) *(ddrOfPin(P))|=pinMask(P)
#define digitalLow(P) *(portOfPin(P))&=~pinMask(P)
#define digitalHigh(P) *(portOfPin(P))|=pinMask(P)
#define isHigh(P)((*(pinOfPin(P))& pinMask(P))>0)
#define isLow(P)((*(pinOfPin(P))& pinMask(P))==0)
#define digitalState(P)((uint8_t)isHigh(P))

// pin for optocoupler
#define PIN_OC  3
// pin of sound sensor
#define PIN_SND 2

// power of 2
#define NUMTS 16
volatile unsigned long ts[NUMTS];
volatile int its;

void setup() {
#ifdef DEV
	delay(50); // bootloader listens for firmware update, should not get garbage, wait a bit
	Serial.begin(9600);
#endif
  pinAsOutput(LED_BUILTIN);
  digitalLow(LED_BUILTIN);
  pinAsOutput(PIN_OC);
  digitalLow(PIN_OC);

  pinMode(PIN_SND, INPUT);  // can't use macro shortcut here, since we're attaching an interrupt to this pin

  resetTs();
  
  attachInterrupt(digitalPinToInterrupt(PIN_SND), recordNoise, RISING);
}

void resetTs() {
  memset((void*)ts, 0, sizeof(ts));
  its = 0;
}

void recordNoise() {
  unsigned long time = millis();
  if (time - ts[its] < 200ul) return;
  its = (its+1) & (NUMTS-1);
  ts[its] = time;
}

boolean detectClap(int &it, int ms, int e) {
  unsigned long current = ts[it];
  it = (it-1) & (NUMTS-1);
  unsigned long prev = ts[it];

  LOG("Clap: %d. %lu, %lu", it, current, prev);

  unsigned long diff = current - prev;
  if (diff >= (1ul<<15)) return false;
  
  if (abs((int)diff - ms) <= e) return true;
  return false;
}

boolean detectOnClap() {
  int it = its;
  return detectClap(it, 250, 75) && detectClap(it, 250, 75);
}

boolean detectOffClap() {
  int it = its;
  return detectClap(it, 500, 100);
}

unsigned long lastRun = 0;

void loop() {
  // if there was no new input since last run, skip
  unsigned long thisRun = ts[its];
  if (lastRun == thisRun) {
    delay(50);
    return;
  }

  lastRun = thisRun;

  if (detectOnClap()) {
    digitalHigh(LED_BUILTIN);
    digitalHigh(PIN_OC);
    resetTs();
    delay(50);
  } else if (detectOffClap()) {
    digitalLow(LED_BUILTIN);
    digitalLow(PIN_OC);
    resetTs();
    delay(50);
  }
}