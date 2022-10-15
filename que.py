from dataclasses import dataclass

@dataclass
class Queue:

    items = []
    limit = 10

    def add(self, e):

        if len(self.items)<self.limit:
            self.items.insert(len(self.items), e)
            return True
        return False

    def elememnt(self):
        return self.items[0]

    def offer1(self, e):
        self.items.insert(len(self.items), e)
        return True
    
    def offer2(self, e):
        if len(self.items)>=self.limit:
            del self.items[-1]
            self.items.insert(len(self.items), e)
            return True
        return False
    
    def peek(self):

        if len(self.items)==0:
            return None
        return self.items[0]

    def poll(self):
        if len(self.items)==0:
            return None
        aux = self.items[0]
        del self.items[0]
        return aux

    def remove(self):
        aux = self.items[0]
        del self.items[0]
        return aux
    
    def size(self):
        return len(self.items)

    def is_empty(self):
        return len(self.items)==0

queue = Queue()

# print(queue.peek())
print(queue.is_empty())
#print(queue.add(9))
queue.add(10)
queue.add(11)
queue.add(12)
queue.add(13)
queue.add(14)
queue.add(15)
queue.add(16)
queue.add(17)
queue.add(18)
queue.add(19)
queue.add(20)

print(queue.add(21))
print(queue.offer1(22))
print(queue.offer2(23))

print(queue.items)
print(queue.peek())

print(queue.poll())
print(queue.items)

print(queue.remove())
print(queue.items)

print(queue.size())
print(queue.is_empty())