# OrangeWork

Orange Work - improvement on a previous school project found here. Remastered in Flask, potentially django and react in the future.

# Getting Started

    git clone [URL] - Clone the code from Git hub https://github.com/razzacktiger/CMPE-131-2_Term_Project-

## Local Developement:

### Flask Implementation:

Install Python Libraries from linux terminal using pip command:

    pip install flask
    pip install flask-wtf
    pip install wtforms
    pip install email-validator
    pip install flask-markdown
    or pip install markdown
    pip install flask-login
    pip install flask-sqlalchemy
    pip install -u werkzeug # Install Werkzeug for security
    pip install datetime
    pip install mkdocs # for documentation

Or navigate to Flask-implementation and run `pip install -r requirements.txt`

Initialize Database File:
Before starting up app, navigate to the projectstart file. Run python3 IDE

    from myapp import db import db object
    from myapp.models import User, Notes, Note, FlashCard, ToDo import tables from models including the association tabel 'Notes'
    quit()  # exit out of IDE

Navigate to the projectstart file and run `python3 run.py` Using this you should be able to run the application.

### Accessing Mkdocs

To access the docs navigate to the docs/projectdocs folder and run `mkdocs serve` in the terminal. Then copy the url given and run it in a browser. The docs will provide a detailed overview of the methods, and contents of the implementation.
