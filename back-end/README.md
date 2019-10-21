# API

| Route | Parameters | Return | Comentary |
|:-|:-|:-|:-|
| `index` | | | Print "oi". |
| `login` | `email`: string<br>`password`: string | `user`: object<br>`token`: string | Check email and password combination and return object with user's object and token. |
| `house/[id]` | | `house`: object | Query house by id. |
| `house/delete` | `id`: string\|number | `deleted`: string\|number | Delete a house by id. Return deleted id. Admin must be authenticated. |
| `house/new` | `name`: string | `created`: string\|number | Create new house. Return house id created. Must be authenticated. |
| `livein/[id]` | | `residents`: object | Return the users residents of a house by id. |
| `livein/index` | | `houses`: object | Return the houses where the user lives. Must be authenticated. Must be authenticated. |
| `livein/new` | `userId`: string\|number<br>`houseId`: string\|number | `userId`: string\|number<br>`houseId`: string\|number | Add user to a house by ids. House admin must be authenticated. |
| `user/[id]` | | `house`: object | Query user by id. |
| `user/delete` | `id`: string\|number<br>`confirmation`: boolean | `deleted`: string\|number | Delete user by id. Must be authenticated. Return deleted id. |
| `user/edit` | `id`: string\| number<br>`name`: string<br>`income`: number<br>`email`: string<br>`password`: string | `user`: object<br>`token`: string | Edit user. Must be authenticated. Return user's object and token. |
| `user/index` | | `user`: object | Return user authenticated. |
| `user/new` | number<br>`name`: string<br>`income`: number<br>`email`: string<br>`password`: string | `created`: string\|number | Create new user. Return user id created. |
