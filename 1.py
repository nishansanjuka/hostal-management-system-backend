import os

# Create folder structure
folders = [
    "controllers",
    "models",
    "routes",
    "config",
    "utils",
    "tests"
]

for folder in folders:
    os.makedirs(folder, exist_ok=True)

# Create controller files
controllers = [
    "hostelsController.js",
    "roomsController.js",
    "studentsController.js",
    "roomRequestsController.js",
    "usersController.js"
]

for controller in controllers:
    open(os.path.join("controllers", controller), 'w').close()

# Create model files
models = [
    "hostelModel.js",
    "roomModel.js",
    "studentModel.js",
    "roomRequestModel.js",
    "userModel.js"
]

for model in models:
    open(os.path.join("models", model), 'w').close()

# Create route files
routes = [
    "hostelsRoutes.js",
    "roomsRoutes.js",
    "studentsRoutes.js",
    "roomRequestsRoutes.js",
    "usersRoutes.js"
]

for route in routes:
    open(os.path.join("routes", route), 'w').close()

# Create config files
config_files = [
    "database.js",
    "server.js"
]

for config_file in config_files:
    open(os.path.join("config", config_file), 'w').close()

# Create utility files
utilities = [
    "authentication.js",
    "validation.js"
]

for utility in utilities:
    open(os.path.join("utils", utility), 'w').close()

# Create test files
tests = [
    "hostelsController.test.js",
    "roomsController.test.js",
    "studentsController.test.js",
    "roomRequestsController.test.js",
    "usersController.test.js"
]

for test in tests:
    open(os.path.join("tests", test), 'w').close()

# Create server entry point file
open("server.js", 'w').close()
