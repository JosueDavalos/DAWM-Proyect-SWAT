import pymysql

if pymysql.version_info < (1, 4, 0): 
    pymysql.version_info = (1, 4, 0)
pymysql.install_as_MySQLdb()
