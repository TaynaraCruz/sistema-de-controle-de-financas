# API

| Route | Parameters | Return | Comentary |
|:-|:-|:-|:-|
| `index` | | | Print "oi". |
| `login` | `email`: string<br>`password`: string | `user`: object<br>`token`: string | Check email and password combination and return object with user's object and token. |
| `user/[id]` | | `house`: object | Query house by id. |
| `user/delete` | `id`: string\|number<br>`confirmation`: boolean |`deleted`: string\|number | Delete user by id. Must be authenticated. Return deleted id. |
| `user/edit` | `id`: string\ | number<br>`name`: string<br>`income`: number<br>`email`: string<br>`password`: string | `user`: object<br>`token`: string | Edit user. Must be authenticated. Return user's object and token. |
| `user/index` | | `user`: object | Return user authenticated. |
| `user/new` | number<br>`name`: string<br>`income`: number<br>`email`: string<br>`password`: string | `created`: string\|number | Create new user. Return user id created. |
