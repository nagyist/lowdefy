/*
  Copyright 2020-2023 Lowdefy, Inc

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

import pino from 'pino';

// TODO: Pino does not serialize error.cause properties if the cause object is not an Error (or Error-like)
const logger = pino({
  name: 'lowdefy_server',
  level: process.env.LOWDEFY_LOG_LEVEL ?? 'info',
  base: { pid: undefined, hostname: undefined },
});

function createLogger(metadata = {}) {
  return logger.child(metadata);
}

export default createLogger;
