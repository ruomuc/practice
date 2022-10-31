#include <cmath>
#include <iostream>
#include "tgaimage.h"

const TGAColor red = TGAColor(255, 0, 0, 255);

void line(int x1, int x2, int y1, int y2, TGAImage &image, TGAColor color);

int main(int argc, char **argv)
{
  TGAImage image(1000, 1000, TGAImage::RGB);
  image.set(52, 41, red);
  image.flip_vertically();
  line(500, 0, 500, 0, image, red);
  line(500, 1000, 500, 1000, image, red);
  line(500, 1000, 500, 700, image, red);
  line(500, 0, 500, 1000, image, red);
  line(500, 1000, 500, 0, image, red);
  line(500, 500, 500, 0, image, red);
  line(500, 500, 500, 1000, image, red);
  line(500, 1000, 0, 1000, image, red);
  line(500, 0, 0, 1000, image, red);
  line(750, 1000, 1000, 0, image, red);
  image.write_tga_file("../out/lesson00.tga");
  return 0;
}

/**
 * Bresenham直线算法
 */
void line(int x1, int x2, int y1, int y2, TGAImage &image, TGAColor color)
{
  float slope = std::abs(y2 - y1) > std::abs(x2 - x1);
  // 如果斜率大于1，翻转x,y坐标
  if (slope)
  {
    int temp;
    temp = x1;
    x1 = y1;
    y1 = temp;

    temp = x2;
    x2 = y2;
    y2 = temp;
  }

  // 修改x的方向,如果x方向是反的，修改方向
  if (x2 < x1)
  {
    int temp;
    temp = x1;
    x1 = x2;
    x2 = temp;

    temp = y1;
    y1 = y2;
    y2 = temp;
  }

  // 确定y的方向
  int y_step = 1;
  if (y2 < y1)
  {
    y_step = -1;
  }

  int y = y1;
  int eps = 0;

  int dx = x2 - x1;
  int dy = std::abs(y2 - y1);

  for (int x = x1; x <= x2; x++)
  {
    if (slope)
    {
      image.set(y, x, color);
    }
    else
    {
      image.set(x, y, color);
    }
    eps += dy;
    std::cout << "x: " << x << " y: " << y << ", eps: " << eps << std::endl;
    if ((eps << 1) >= dx)
    {
      y += y_step;
      eps -= dx;
    }
  }
}

// /**
//  * DDA直线算法
//  */
// void line(int x1, int x2, int y1, int y2, TGAImage &image, TGAColor color)
// {
//   float x = x1;
//   float y = y1;
//   int dx = x2 - x1;
//   int dy = y2 - y1;

//   float step;
//   float dlx, dly;

//   if (std::abs(dx) >= std::abs(dy))
//   {
//     step = std::abs(dx);
//   }
//   else
//   {
//     step = std::abs(dy);
//   }

//   dlx = dx / step;
//   dly = dy / step;

//   for (int i = 1; i < step; i++)
//   {
//     image.set(x, y, color);
//     std::cout << "x: " << x << ", y: " << y << std::endl;
//     x += dlx;
//     y += dly;
//   }
// }

// void line(int x1, int x2, int y1, int y2, TGAImage &image, TGAColor color)
// {
//   const float dl = 0.01;
//   int dx = x2 - x1;
//   int dy = y2 - y1;

//   for (float t = 0.0; t < 1.0; t += dl)
//   {
//     int x = x1 + dx * t;
//     int y = y1 + dy * t;
//     image.set(x, y, color);
//   }
// }
