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
import { Input } from 'antd';

import Block from '../src/blocks/PasswordInput/PasswordInput';
import examples from '../demo/examples/PasswordInput.yaml';
import meta from '../src/blocks/PasswordInput/PasswordInput.json';

jest.mock('antd/lib/input', () => {
  const comp = jest.fn(() => 'mocked');
  comp.Password = jest.fn(() => 'mocked');
  return comp;
});

const mocks = [
  {
    name: 'default',
    fn: Input.Password,
  },
];

runMockRenderTests({ examples, Block, meta, mocks });