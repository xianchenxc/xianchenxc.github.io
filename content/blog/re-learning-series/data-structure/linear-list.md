---
title: 线性表
date: 2021-09-15
description: 主要讨论一般线性表的表示，并且介绍了不同的实现线性表的方法，最后介绍了线性表的简单应用。
---

## 线性表（Linear List）

线性表是 n (n ≥ 0) 个数据元素的一个**有限**的序列。记为

```
 L = (a1, a2, ... an)
```

其中，L 是表名，ai 是表中数据元素，是不可再分割的原子数据，亦称为结点或表项。n 为表的长度，若 n = 0 叫做空表。第一个表项为表头，最后一个表项为表尾。

### ADT

```
ADT LinearList is
Objects: n(≥ 0) 个原子表项的一个有限序列。每个表项的数据类型为 T。
Function:
  create()
  int Length()
  int search(T& x)
  int Locate(int i)             定位函数：返回第 i 个表项在表中位置
  bool getData(int i, T& x)
  void setData(int i, T& x)
  bool Insert(int i, T& x)
  bool Remove(int i, T& x)
  bool IsEmpty()
  bool IsFull()
  void CopyList(List<T>& L)
  void Sort()
end LinearList
```





