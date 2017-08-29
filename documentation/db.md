# users
- id SERIAL PRIMARY KEY
- name VARCHAR(100) NOT NULL
- password VARCHAR(100) NOT NULL
- state BOOLEAN DEFAULT false
- avatar VARCHAR(100) NOT NULL
- gender VARCHAR(100) NOT NULL

# messages
- id SERIAL PRIMARY KEY
- sender_id fk
- receiver_id fk
- context TEXT NOT NULL
- state BOOLEAN DEFAULT false
- date timestampe DEFAULT now()
