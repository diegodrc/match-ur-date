from app import app

'''
    Start do sistema, configurar o script path aqui
'''

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=8999,debug=True)