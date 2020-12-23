# Web-storage

A `Store`(from `rx-utils` package) wrapper that adds an ability to write and read from any storage that implements `Storage` interface(localStorage, sessionStorage). Validation is included - fully type safe.

An example:

```ts
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
```
