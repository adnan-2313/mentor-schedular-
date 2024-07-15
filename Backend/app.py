from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def get_db_connection():
    return mysql.connector.connect(
       host="localhost",  # e.g., "localhost"
        user="root",  # e.g., "root"
        password="1234567890",
        database="dishes_database"
    )

@app.route('/dishes', methods=['GET'])
def get_dishes():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM dishes")
    dishes = cursor.fetchall()
    conn.close()
    return jsonify(dishes)

@app.route('/dishes/<int:dish_id>/toggle', methods=['POST'])
def toggle_dish(dish_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT isPublished FROM dishes WHERE dishId=%s", (dish_id,))
    current_status = cursor.fetchone()
    
    if current_status is None:
        return jsonify({"error": "Dish not found"}), 404
    
    new_status = not current_status[0]
    cursor.execute("UPDATE dishes SET isPublished=%s WHERE dishId=%s", (new_status, dish_id))
    conn.commit()
    conn.close()
    
    return jsonify({"dishId": dish_id, "newStatus": new_status})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')  # Allow connections from any IP address
