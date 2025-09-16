interface ListNode {
  val: number;
  next: ListNode | null;
}

export default function linkedListDetectCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  let slow = head.next;
  let fast = head.next.next;

  while (fast !== null && fast.next !== null) {
    if (slow === null) return false;
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}
