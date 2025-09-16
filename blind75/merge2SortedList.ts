interface ListNode {
  val: number;
  next: ListNode | null;
}

export default function linkedListCombineTwoSorted(
  listA: ListNode | null,
  listB: ListNode | null,
): ListNode | null {
  let dummyNode: ListNode = { val: -1, next: null };
  let point: ListNode = dummyNode;

  while (listA !== null && listB !== null) {
    if (listA.val <= listB.val) {
      point.next = listA;
      listA = listA.next;
    } else {
      point.next = listB;
      listB = listB.next;
    }
    point = point.next;
  }

  if (listA !== null) {
    point.next = listA;
  } else {
    point.next = listB;
  }

  return dummyNode.next;
}
