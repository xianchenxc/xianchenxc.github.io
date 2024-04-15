---
title: Dynamic Programming
date: 2024-01-06
description: 
---

目标：

1. 了解什么是动态规划
2. 理清动态规划的核心原理
3. 常用的动态规划的应用场景

## What is Dynamic Programming?

> Dynamic Programming is a computer programming technique where an algorithm probleam is first broken down into sub-problems, the results are saved, and then the sub-problems are optimized to find the overall solution - which usually has to do with finding the maximum and minimum range of the algorithmic query.

动态规划，是一种在数学、管理科学、计算机科学、经济学和生物信息学中使用的，通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。动态规划常常适用于有重叠子问题和最优子结构性质的问题。

## How does Dynamic Programming work?

Dynamic Programming works by break down complex problem into **simpler subproblems**. Then, finding optimal solutions to these subproblems. **Memorization** is a method that saves the outcomes of these processes so that the corresponding answers do not need to computed when thery are later needed.

动态规划的核心思想是：

- 拆分子问题：将复杂的问题拆成相对简单的子问题
- 缓存：子问题会存在重叠部分，通过缓存，减少重复计算

动态规划可以通过以下两种方式实现：

### Top-down approach

在计算机科学中，我们通常使用递归算法来求解问题。如果子问题存在重叠，则可以通过缓存和记表的方式来减少重复计算。

### Bottom-up approach

如果一个问题问题可以通过不断

## Applications

### 接雨水

问题链接：https://leetcode.cn/problems/trapping-rain-water/description/

简单分析：假设第 i 根柱子能接 rain[i] 雨水，那么一共能接 rain[0] + rain[1] + ... + rain[len - 1]，问题的关键在于如何计算第 i 根柱子能接多少雨水？第 i 根柱子能接多少雨水，取决于左/右侧最高的柱子高度的较小值 - 第 i 根柱子的高度，即:

    rain[i] = Math.min(maxLeft[i] - maxRight[i]) - height[i]

问题转变为：计算第 i 根柱子左右两边的最大高度，最简单的方法，遍历 [0, i) 和 (i, len)，时间复杂度为 O(n)，整体时间复杂度 O(n^2)

我们注意到求 maxLeft[i] 和 maxLeft[i - 1]，其实重复遍历计算了 [0, i - 1]，这是没有必要的，当知道 maxLeft[i - 1] 时，只需要简单比较 maxLeft[i - 1] 和 height[i] 即可：

    maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1])

这样，计算 maxLeft[i] 的时间复杂度从 O(n) 变成 O(1)，整体复杂度变为 O(n)。

## 参考文档

[What is Dynamic Programming?](https://www.spiceworks.com/tech/devops/articles/what-is-dynamic-programming/)