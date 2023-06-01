import requests
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
from bs4 import BeautifulSoup
from urllib.parse import urljoin

url = 'https://www.vintagememorabilia.com/index.cfm/page/barack-obama-dreams-from-my-father-signed-autographed-book/'

response = requests.get(url, verify=False)
soup = BeautifulSoup(response.content, 'html.parser')

# Save the HTML content to a file
with open('page.html', 'w', encoding='utf-8') as f:
    f.write(soup.prettify())

# Extract the CSS
css_links = soup.find_all('link', rel='stylesheet')

for i, link in enumerate(css_links, 1):
    css_url = urljoin(url, link['href'])
    css_response = requests.get(css_url, verify=False)

    # Save the CSS content to a file
    with open(f'css_{i}.css', 'w', encoding='utf-8') as f:
        f.write(css_response.text)

print('Scraping completed.')
