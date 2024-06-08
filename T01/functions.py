from requests import get
from bs4 import BeautifulSoup


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip



def getLocation(ip):
    class Location:
        def __init__(self,data):
            self.country = data[0]
            self.city = data[1]
            self.zipCode = data[3]
            self.state = data[2]
        def __str__(self):
            return  f'{self.country}\n{self.city}\n{self.state}\n{self.zipCode}'    
    r = get(f'https://whoismind.com/ips/{ip[:-2]}0/24').text
    soup = BeautifulSoup(r, 'html.parser')
    table = soup.find_all('table',{"class": "rs-table"})
    cleanedList = []
    data = table[0].find_all('td',{"class":'txt'})
    for each in data:
        cleanedList.append(each.getText().strip())
    return Location(cleanedList)


def requirementsReturn(file):
    return open(file,'r','')