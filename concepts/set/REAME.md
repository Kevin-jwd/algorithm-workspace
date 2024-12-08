# Set

`Set` 객체는 **값의 컬렉션**을 나타내며, 다음과 같은 특징을 가집니다:

- `Set`의 값은 **단 한 번만** 나타날 수 있습니다.
- 삽입 순서는 각 요소가 `add()` 메서드에 의해 `Set`에 성공적으로 삽입된 순서입니다.
- 값의 동일성은 **동일 값 제로 동등 알고리즘**을 기반으로 하며, `-0`과 `0`은 동등하게 취급됩니다.

<br>

## 성능

- `has` 메서드는 `Set`에 추가된 요소를 확인하는 대부분의 방법보다 평균적으로 빠릅니다.
- 배열의 `length == Set의 size` 일 때 배열의 `includes()` 메서드보다 평균적으로 빠릅니다.

<br>

## 연산 메서드

`Set`은 집합과 관련된 여러 수학적 연산을 제공합니다:

| 메서드 | 반환 유형 | 수학적 동치 |
| --- | --- | --- |
| `A.difference(B)` | `Set` | $A - B$ |
| `A.intersection(B)` | `Set` | $A \cap B$ |
| `A.symmetricDifference(B)` | `Set` | $(A - B) \cup (B - A)$ |
| `A.union(B)` | `Set` | $A \cup B$ |
| `A.isDisjointFrom(B)` | `Boolean` | $A \cap B = \emptyset$ |
| `A.isSubsetOf(B)` | `Boolean` | $A \subseteq B$ |
| `A.isSuperSetOf(B)` | `Boolean` | $A \supseteq B$ |

<br>

## 유용한 메서드

`Set` 객체에서 자주 사용하는 메서드들입니다:

- `Set.prototype.add(value)`  
  - **설명**: `Set` 객체에 새로운 요소를 삽입합니다. 동일한 값이 이미 존재하면 추가되지 않습니다.
  
- `Set.prototype.clear()`  
  - **설명**: `Set` 객체의 모든 요소를 제거합니다.
  
- `Set.prototype.forEach(callback)`  
  - **설명**: `Set` 객체에 있는 각 값에 대해 삽입 순서대로 콜백 함수를 호출합니다.
  
- `Set.prototype.has(value)`  
  - **설명**: 주어진 값이 `Set` 객체 내에 존재하는지 확인하고, 그 결과를 `true` 또는 `false`로 반환합니다.

<br>
  
## 출처

- [MDN Web Docs - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)  
