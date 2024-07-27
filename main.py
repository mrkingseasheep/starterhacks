todo = []

print('Welcome to your todo list! :D')
print('1 - show todo list')
print('2 - add a task')
print('3 - complete a task')

choice = int(input('Enter your choice (1, 2, or 3): '))

if choice == 1:
    print('\ntodo:')
    for index, task in enumerate(todo):
        status = "Done" if task["done"] else "Not Done"
        print(f"{index + 1}. {task['task']} - {status}")

elif choice == 2:
    task = input('Enter new task: ')
    todo.append({'task': task, 'done': False})
    print('Task added to list')

elif choice == '3':
            task_index = int(input('Enter the number corresponding to completed task')) - 1
            if 0 <= task_index < len(todo):
                todo[task_index]["done"] = True
                print("Task marked as done!")
            else:
                print("Invalid task number.")

else:
    print("Invalid choice. Please try again.")
 

