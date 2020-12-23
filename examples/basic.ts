import { makeMapStore } from '@performance-artist/rx-utils';
import { makeWebStorage } from '../src/index';
import * as t from 'io-ts';

type Message = { id: number; text: string };

const withLocalStorage = makeWebStorage(
  localStorage,
  makeMapStore<number, Message[]>(),
);
const withMessageScheme = withLocalStorage(
  t.number,
  t.array(
    t.type({
      id: t.number,
      text: t.string,
    }),
  ),
);
const messageStore = withMessageScheme('messages');
const messages = messageStore.get(0); // has all Store methods - same interface
