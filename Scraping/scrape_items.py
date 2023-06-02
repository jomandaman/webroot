import requests

from bs4 import BeautifulSoup

# Disable SSL warnings
requests.packages.urllib3.disable_warnings()

# Base URL
base_url = "https://www.vintagememorabilia.com/"

# Inventory URL
inventory_url = base_url + "index.cfm/view/inventory/"

# Make a request to the website
r = requests.get(inventory_url, verify=False)
r.raise_for_status()

# Parse the HTML of the site and use the html parser
soup = BeautifulSoup(r.text, 'html.parser')

# Find all category divs
category_divs = soup.find_all('div', class_='category-items clearfix')

# Create a set to store the person URLs
seen_person_urls = set()

# Iterate over each category
for category_div in category_divs:
    # Find all person links within the category
    person_links = category_div.find_all('a')
    
    # Iterate over each person link
    for person_link in person_links:
        # Get the person's URL
        person_url = base_url + person_link['href']

        # If we've already seen this person URL, skip it
        if person_url in seen_person_urls:
            continue

        # Add the person URL to the set of seen URLs
        seen_person_urls.add(person_url)

        # Print the person's URL
        print("Found person: {}".format(person_url))
        
        # Make a request to the person's page
        r = requests.get(person_url, verify=False)
        r.raise_for_status()
        
        # Parse the HTML of the person's page
        person_soup = BeautifulSoup(r.text, 'html.parser')
        
        # Find all item divs
        item_divs = person_soup.find_all('div', class_='col-xs-12 col-sm-6 col-md-4 col-lg-3')
        
        # Iterate over each item div
        for item_div in item_divs:
            # Find the item link
            item_link = item_div.find('a')
            
            # Get the item's URL
            item_url = base_url + item_link['href']

            # Print the item's URL
            print("Found item: {}".format(item_url))
            
            # Make a request to the item's page
            r = requests.get(item_url, verify=False)
            r.raise_for_status()
            
            # Parse the HTML of the item's page
            item_soup = BeautifulSoup(r.text, 'html.parser')
            
            # Extract the item details
            # TODO: Add your code here to extract the item details
            
            # Print the item details
            # TODO: Add your code here to print or save the item details
