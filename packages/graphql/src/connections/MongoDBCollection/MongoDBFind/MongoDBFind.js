/*
  Copyright 2020 Lowdefy, Inc

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

import getCollection from '../getCollection';
import { serialize, deserialize } from '../serialize';
import checkConnectionRead from '../../../utils/checkConnectionRead';

import schema from './MongoDBFindSchema.json';

async function mongodbFind({ request, connection, context }) {
  checkConnectionRead({ connection, context, connectionType: 'MongoDBCollection' });
  const deserializedRequest = deserialize(request);
  const { query, options } = deserializedRequest;
  const { collection, client } = await getCollection({ connection, context });
  let res;
  try {
    const cursor = await collection.find(query, options);
    res = await cursor.toArray();
  } catch (err) {
    await client.close();
    throw new context.RequestError(`${err.name}: ${err.message}`);
  }
  await client.close();
  return serialize(res);
}

export default { resolver: mongodbFind, schema };
