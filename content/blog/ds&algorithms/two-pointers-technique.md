---
title: 双指针
date: 2021-09-20
description: 
---

双指针（two-pointers) 指的是在迭代对象的过程中，使用两个相同方向或者相反方向的指针进行扫描。在处理**有序**数组搜索问题中，简单且高效。

## 快慢指针


## 对撞指针

定义两个指针：左指针 `left` 和右指针 `right`，且使左指针指向数组左侧，右指针指向数组右侧。在迭代过程中，左指针不断右移，右指针不断左移，直到发生**碰撞**。

```
// 伪代码, 数组长度为 arraySize
int left = 0;
int right = arraySize;

while(left <= right) {
  if (condition) {
    left++;
  }

  if (another condition) {
    right--;
  }
}
```

### 有序数组的平方

给你一个按**非递减顺序**排序的整数数组 nums，返回**每个数字的平方**组成的新数组，要求也按**非递减顺序**排序。

[有序数组的平方](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)

解决思路：

1. 关键字**非递减顺序**，说明数组是有序的，可以使用双指针；
2. 假设存在一个 k，使得：
  - i < k, nums[i] < 0
  - k < i, 0 < nums[i]
3. 平方后，可得：
  - i < k, nums 顺序性发生变化，平方后的数组为降序，↓
  - k < i, nums 顺序性不变，升序 ↑。
4. 令 left = 0, right = nums.length - 1，那么最大元素为 max(left, right)：
  - 若 left 更大，left 为剩余最大元素，left 指针所指向的元素填入 ans 数组，同时 left 指针右移
  - 若 right 更大，right 为剩余中最大元素，right 指针所指向的元素填入 ans 数组，同时 right 指针左移
  - 不断迭代，直至左右指针发生碰撞。

```js
var sortedSquares = function(nums) {
  var ans = [];   // 结构数组
  var i = nums.length - 1;  // 
  var left = 0;
  var right = nums.length - 1;
  
  while(left <= right) {
    if (nums[left] * nums[left] <= nums[right] * nums[right]) {
      ans[i] = nums[right] * nums[right];
      right--;
    } else {
      ans[i] = nums[left] * nums[left];
      left++;
    }

    i--;
  }

  return ans;
};
```