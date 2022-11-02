#include <cmath>
#include <iostream>
#include "tgaimage.h"
#include "model.h"

const TGAColor red = TGAColor(255, 0, 0, 255);
const TGAColor white = TGAColor(255, 255, 255, 255);

void lineDDA(int x1, int x2, int y1, int y2, TGAImage &image, TGAColor color);
void line(int x1, int x2, int y1, int y2, TGAImage &image, TGAColor color);
void drawDDALine();
void drawLine();
void drawObj();

int main(int argc, char **argv)
{
  // drawDDALine();
  // drawLine();
  drawObj();
  return 0;
}

void drawObj()
{
  const int width = 800;
  const int height = 800;

  // 实例化模型
  Model *model = new Model("../obj/african_head.obj");

  TGAImage image(width, height, TGAImage::RGB);

  // 循环模型里的所有三角形
  for (int i = 0; i < model->nfaces(); i++)
  {
    std::vector<int> face = model->face(i);

    // 循环三角形三个顶点，每两个顶点连一条线
    for (int j = 0; j < 3; j++)
    {
      Vec3f v0 = model->vert(face[j]);
      Vec3f v1 = model->vert(face[(j + 1) % 3]);

      // 因为模型空间取值范围是 [-1, 1]^3，我们要把模型坐标平移到屏幕坐标中
      // 下面 (point + 1) * width(height) / 2 的操作学名为视口变换（Viewport Transformation）
      int x0 = (v0.x + 1.) * width / 2.;
      int y0 = (v0.y + 1.) * height / 2.;
      int x1 = (v1.x + 1.) * width / 2.;
      int y1 = (v1.y + 1.) * height / 2.;

      // 画线
      line(x0, y0, x1, y1, image, white);
    }
  }

  image.flip_vertically();
  image.write_tga_file("../out/line_obj.tga");

  delete model;
}

void drawLine()
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
  image.write_tga_file("../out/Bresenhamline.tga");
}

void drawDDALine()
{
  TGAImage image(1000, 1000, TGAImage::RGB);
  image.set(52, 41, red);
  image.flip_vertically();
  lineDDA(500, 0, 500, 0, image, red);
  lineDDA(500, 1000, 500, 1000, image, red);
  lineDDA(500, 1000, 500, 700, image, red);
  lineDDA(500, 0, 500, 1000, image, red);
  lineDDA(500, 1000, 500, 0, image, red);
  lineDDA(500, 500, 500, 0, image, red);
  lineDDA(500, 500, 500, 1000, image, red);
  lineDDA(500, 1000, 0, 1000, image, red);
  lineDDA(500, 0, 0, 1000, image, red);
  lineDDA(750, 1000, 1000, 0, image, red);
  image.write_tga_file("../out/ddaline.tga");
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
    if ((eps << 1) >= dx)
    {
      y += y_step;
      eps -= dx;
    }
  }
}

/**
 * DDA直线算法
 */
void lineDDA(int x1, int x2, int y1, int y2, TGAImage &image, TGAColor color)
{
  float x = x1;
  float y = y1;
  int dx = x2 - x1;
  int dy = y2 - y1;

  float step;
  float dlx, dly;

  if (std::abs(dx) >= std::abs(dy))
  {
    step = std::abs(dx);
  }
  else
  {
    step = std::abs(dy);
  }

  dlx = dx / step;
  dly = dy / step;

  for (int i = 1; i < step; i++)
  {
    image.set(x, y, color);
    x += dlx;
    y += dly;
  }
}

// 原始的画直线的方法
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
