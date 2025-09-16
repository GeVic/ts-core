interface ListNode {
  val: number;
  next: ListNode | null;
}

export default function deleteNthNodeFromEnd(
  head: ListNode | null,
  n: number,
): ListNode | null {
  let dummy = { val: 0, next: head };
  let firstPoint: ListNode = dummy;
  let secondPoint: ListNode = dummy;

  for (let i = 0; i < n; i++) {
    if (secondPoint !== null) {
      secondPoint = secondPoint.next;
    }
  }

  while (secondPoint !== null) {
    firstPoint = firstPoint.next!;
    secondPoint = secondPoint.next!;
  }

  if (firstPoint.next !== null && firstPoint !== null) {
    let dum = firstPoint.next;
    firstPoint = dum;
    firstPoint.next = dum.next;
  }

  return dummy.next;
}
