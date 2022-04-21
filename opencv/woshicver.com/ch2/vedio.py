import cv2
import numpy

cap = cv2.VideoCapture(0)
if not cap.isOpened():
    print('cant open camera')
    exit()