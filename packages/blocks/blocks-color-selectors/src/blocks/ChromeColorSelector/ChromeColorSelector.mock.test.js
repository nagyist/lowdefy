/*
  Copyright 2020-2021 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import { runMockRenderTests } from '@lowdefy/block-dev';
import { ChromePicker } from 'react-color';

import Block from './ChromeColorSelector.js';
import examples from './examples.yaml';
import block from './index.js';

const { meta } = block;

jest.mock('react-color', () => {
  const selectors = {
    ChromePicker: jest.fn((props) => props.toString()),
  };
  return selectors;
});

const mocks = [
  {
    name: 'default',
    fn: ChromePicker,
  },
];

runMockRenderTests({ examples, Block, meta, mocks });