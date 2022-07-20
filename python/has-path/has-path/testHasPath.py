#!/usr/bin/env python
# -*- coding: utf-8 -*-

import unittest
#from hasPathIteractive import *
from hasPathRecursive import *

class TestProblem(unittest.TestCase):
    def test_1(self):
      graph = {
        'f': ['g', 'i'],
        'g': ['h'],
        'h': [],
        'i': ['g', 'k'],
        'j': ['i'],
        'k': []
      }
      self.assertEqual(hasPath(graph, 'f', 'k'), True)

    def test_2(self):
      graph = {
        'f': ['g', 'i'],
        'g': ['h'],
        'h': [],
        'i': ['g', 'k'],
        'j': ['i'],
        'k': []
      }
      self.assertEqual(hasPath(graph, 'f', 'j'),False)

    def test_3(self):
      graph = {
        'f': ['g', 'i'],
        'g': ['h'],
        'h': [],
        'i': ['g', 'k'],
        'j': ['i'],
        'k': []
      }
      self.assertEqual(hasPath(graph, 'i', 'h'), True)

    def test_4(self):
      graph = {
        'v': ['x', 'w'],
        'w': [],
        'x': [],
        'y': ['z'],
        'z': []
      }
      self.assertEqual(hasPath(graph, 'v', 'w'), True)

    def test_5(self):
      graph = {
        'v': ['x', 'w'],
        'w': [],
        'x': [],
        'y': ['z'],
        'z': [],
      }
      self.assertEqual(hasPath(graph, 'v', 'z'), False)

    

if __name__ == "__main__":
    unittest.main()