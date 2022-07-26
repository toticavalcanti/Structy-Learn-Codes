#!/usr/bin/env python
# -*- coding: utf-8 -*-

import unittest

from hasPathRecursive import *

class TestProblem(unittest.TestCase):
    def test_1(self):
      edges = [
        ['i', 'j'],
        ['k', 'i'],
        ['m', 'k'],
        ['k', 'l'],
        ['o', 'n']
      ]
      self.assertEqual(undirectedPath(edges, 'j', 'm'), True)

    def test_2(self):
      edges = [
        ['i', 'j'],
        ['k', 'i'],
        ['m', 'k'],
        ['k', 'l'],
        ['o', 'n']
      ]
      self.assertEqual(undirectedPath(edges, 'm', 'j'), True)

    def test_3(self):
      edges = [
        ['i', 'j'],
        ['k', 'i'],
        ['m', 'k'],
        ['k', 'l'],
        ['o', 'n']
      ]
      self.assertEqual(undirectedPath(edges, 'l', 'j'), True)

    def test_4(self):
      edges = [
        ['i', 'j'],
        ['k', 'i'],
        ['m', 'k'],
        ['k', 'l'],
        ['o', 'n']
      ]
      self.assertEqual(undirectedPath(edges, 'k', 'o'), False)

    def test_5(self):
      edges = [
        ['i', 'j'],
        ['k', 'i'],
        ['m', 'k'],
        ['k', 'l'],
        ['o', 'n']
      ]
      self.assertEqual(undirectedPath(edges, 'i', 'o'), False)

    def test_6(self):
      edges = [
        ['b', 'a'],
        ['c', 'a'],
        ['b', 'c'],
        ['q', 'r'],
        ['q', 's'],
        ['q', 'u'],
        ['q', 't'],
      ]
      self.assertEqual(undirectedPath(edges, 'a', 'b'), True)

    def test_7(self):
      edges = [
        ['b', 'a'],
        ['c', 'a'],
        ['b', 'c'],
        ['q', 'r'],
        ['q', 's'],
        ['q', 'u'],
        ['q', 't'],
      ]
      self.assertEqual(undirectedPath(edges, 'a', 'c'), True)

    def test_8(self):
      edges = [
        ['b', 'a'],
        ['c', 'a'],
        ['b', 'c'],
        ['q', 'r'],
        ['q', 's'],
        ['q', 'u'],
        ['q', 't'],
      ]
      self.assertEqual(undirectedPath(edges, 'r', 't'), True)

    def test_9(self):
      edges = [
        ['b', 'a'],
        ['c', 'a'],
        ['b', 'c'],
        ['q', 'r'],
        ['q', 's'],
        ['q', 'u'],
        ['q', 't'],
      ]
      self.assertEqual(undirectedPath(edges, 'r', 'b'), False)

    def test_10(self):
      edges = [
        ['s', 'r'],
        ['t', 'q'],
        ['q', 'r'],
      ]
      self.assertEqual(undirectedPath(edges, 'r', 't'), True)

    

if __name__ == "__main__":
    unittest.main()