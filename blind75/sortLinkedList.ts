interface ListNode {
  val: number;
  next: ListNode | null;
}

const merge2list = (listNode1: ListNode | null, listNode2: ListNode | null) {
  let dummyNode: ListNode = { val: 0, next: null };
  let point: ListNode = dummyNode;

  while (listNode1 && listNode2) {
    if (listNode1.val <= listNode2.val) {
      point.next = listNode1;
      listNode1 = listNode1.next;
    } else {
      point.next = listNode2;
      listNode2 = listNode2.next;
    }
    point = point.next;
  }

  if (!listNode1) {
    point.next = listNode2;
  } else {
    point.next = listNode1;
  }

  return dummyNode.next;
}

export default function linkedListCombineKSorted(
  lists: (ListNode | null)[],
): ListNode | null {
  let interval: number = 1;
  let k = lists.length;

  while (interval < k) {
    for (let i = 0; i < k - interval; i += interval * 2) {
      lists[i] = merge2list(lists[i], lists[i + interval]);
    }
    interval *= 2;
  }

  return k > 0? lists[0] : null
}
