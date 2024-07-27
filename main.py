import pickle

try:
    with open('todo_list.pkl', 'rb') as file:
        todo = pickle.load(file)
except FileNotFoundError:
    todo = []

while 1 != 2:
    print("\n===== To-Do List =====")
    print("1. Add Task")
    print("2. Show Tasks")
    print("3. Mark Task as Done")

    choice = input("Enter your choice: ")

    if choice == '1':
        task = input("Enter the task: ")
        todo.append({"task": task, "complete": False})
        print("Task added!")

    elif choice == '2':
        print("\nTasks:")
        for index, task in enumerate(todo):
            status = "complete" if task["complete"] else "incomplete"
            print(f"{index + 1}. {task['task']} - {status}")

    elif choice == '3':
        task_index = int(input("Enter the task number to mark as done: ")) - 1
        if 0 <= task_index < len(todo):
            todo[task_index]["complete"] = True
            print("Task marked as done!")
        else:
            print("Invalid task number.")

    else:
        print("Invalid choice. Please try again.")

    with open('todo_list.pkl', 'wb') as file:
        pickle.dump(todo, file)
