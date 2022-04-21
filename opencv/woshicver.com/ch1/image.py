import cv2
import numpy
from matplotlib import pyplot as plt

# 以灰度模式加载图像
img = cv2.imread('saber.jpg', 1)
# 缩小图片
img = cv2.resize(img, None, fx=0.5, fy=0.5, interpolation=cv2.INTER_AREA)
# 展示图片
cv2.imshow('saber', img)

# bgr转rgb
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB) # 注释这行，下面的图片颜色不对，因为matplotlib是rgb格式
plt.imshow(img, cmap='gray', interpolation='bicubic')
plt.show()

k = cv2.waitKey(0) & 0xff
if k == 27:
    cv2.destroyAllWindows()  # ESC退出
elif k == ord('s'):
    cv2.imwrite('saber2.png', img)
    cv2.destroyAllWindows()
