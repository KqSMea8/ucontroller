// TODO: user megad egy listat: timestamp + a 4 sarok szinet.
// feladat: intrapolal 4 sarok kozott, es idoben is atmenetet kepez
// (bonuszpontokert szinuszos atmenetet)

#include <Arduino.h>
#include <NeoPixelBus.h>

const uint8_t ROWS = 8;
const uint8_t COLUMNS = 8;
const uint8_t LEDS = 60;

// uses GPIO2 (hardwired)
NeoPixelBus<NeoGrbFeature, NeoEsp8266AsyncUart800KbpsMethod> strip(LEDS);

//----------------------------------------------------------------------------------------------------------------
// TODO: make class of this
// TODO: add minecraft importer
const char *img = "XyyyyyyX"
                  "y......y"
                  "y.y..y.y"
                  "y......y"
                  "y.y..y.y"
                  "y..yy..y"
                  "y......y"
                  "XyyyyyyX";

char *reverse(char *s, uint16_t len) {
  char *e = s + len;
  while (s < e) {
    std::swap(*s, *e);
    s++;
    e--;
  }
}

// img is row-contigious, while led strip is connected in snake pattern
void translateSnake(uint16_t columns, uint16_t rows, const char *orig_img) {
  // bad baad agoston
  char *img = (char*) orig_img;

  for (uint16_t i = 1; i < rows; i+=2) {
    reverse(img + i*COLUMNS, COLUMNS);
  }
}

//----------------------------------------------------------------------------------------------------------------
class AnimPixel {
  uint8_t r, g, b;
  int8_t dr, dg, db;
  uint8_t maxDelta;

public:
  void step() {
    // TODO: add random so that it glows nicely
  }

  void init(uint8_t pr, uint8_t pg, uint8_t pb, uint8_t pmaxDelta) {
    r = pr;
    g = pg;
    b = pb;
    maxDelta = pmaxDelta;
  }

  void writeGrb(uint8_t *p) {
    *(p++) = g;
    *(p++) = r;
    *(p++) = b;
  }
};

AnimPixel *translatePixel(uint16_t columns, uint16_t rows, uint16_t leds, const char *img) {
  AnimPixel *res = new AnimPixel[leds];

  AnimPixel *ap = res;
  for (int i = 0; i < columns * rows; i++) {
    char pixel = img[i];
    if (pixel == 'X') continue;

    switch (pixel) {
      case 'y': ap->init(192, 192, 0, 64); break;

      default:
      case '.': ap->init(0, 0, 0, 20); break;
    }

    ap++;
  }

  return res;
}

//----------------------------------------------------------------------------------------------------------------
AnimPixel *ap;

void setup() {
  strip.Begin();
  strip.Show();

  // relax a bit, strip.Show() is sending crap
  delay(100);

  translateSnake(COLUMNS, ROWS, img);
  ap = translatePixel(COLUMNS, ROWS, LEDS, img);
}

//----------------------------------------------------------------------------------------------------------------

void loop() {
  // not to be re-used. format is GRB (like above, NeoGrbFeature suggests)
  uint8_t *p = strip.Pixels();

  for (int i = 0; i < LEDS; i++) {
    ap[i].step();
    ap[i].writeGrb(p);
  }

  strip.Show();

  delay(250);
}
