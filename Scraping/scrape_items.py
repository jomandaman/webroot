import requests
import pandas as pd

from bs4 import BeautifulSoup

# Disable SSL warnings
requests.packages.urllib3.disable_warnings()

# Base URL
base_url = "https://www.vintagememorabilia.com"

# Inventory URL
inventory_url = base_url + "/index.cfm/view/inventory/"

# Make a request to the website
r = requests.get(inventory_url, verify=False)
r.raise_for_status()

# Parse the HTML of the site and use the html parser
soup = BeautifulSoup(r.text, 'html.parser')

# Find all category divs
category_divs = soup.find_all('div', class_='category-items clearfix')

# Create a set to store the person URLs
seen_person_urls = set()

# Create a DataFrame to store the person and item data
df = pd.DataFrame(columns=['Person', 'First Name', 'Last Name', 'Category', 'Item URL', 'Title', 'Content', 'Date', 'Price', 'Sold', 'Inquire', 'Item Number', 'Images', 'Related Persons'])

# Create a list to store the rows
rows = []

# Iterate over each category
for category_div in category_divs:
    # Store category
    category = category_div.find('h3').contents[0].strip()

    # Find all person links within the category
    person_links = category_div.find_all('a')

    counter = 0
    
    # Iterate over each person link
    for person_link in person_links:
        # Get the Person
        split_text = person_link.text.split(',')
        if len(split_text) > 1:
            first_name = split_text[1]
            last_name = split_text[0]
            person = first_name + ' ' + last_name
        else:
            first_name = split_text[0]
            last_name = ''
            person = first_name

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

            # Find the maincolContent div
            maincolContent_div = item_soup.find('div', class_='maincolContent')

            # If the maincolContent div was not found, skip to the next iteration
            if maincolContent_div is None:
                print(f"Skipping item: {item_url} - maincolContent div not found")
                continue
            
            # Extract the item details
            title = item_soup.find('p', class_='category-breadcrumb').find('span', class_='category').text
            content = ' '.join(str(child) for child in item_soup.find('div', id='detailText').contents)
            date_text = item_soup.find('div', class_='maincolContent').find('div', class_='row').find('h2').text.split()
            date = next((word for word in reversed(date_text) if any(char.isdigit() for char in word)), None)
            price_div = item_soup.find('div', class_='content-left').find('div', class_='col-xs-3').find('h4', class_='price')
            # Get the price text
            price_text = price_div.text.strip().lower() if price_div else None
            sold = price_text == "sold"
            inquire = price_text.__contains__('inquire')
            if inquire : price_text.replace('sold', '').strip()
            if sold or inquire:
                price = price_text
            else:
                try:
                    price = int(price_text.split()[0].replace('$', ''))
                except ValueError:
                    price = price_text  # set price as the original price_text if it can't be converted to float

            item_number = item_soup.find('div', class_='content-left').find('div', class_='col-xs-9').find('h4', class_='mdgray').text.replace('Item #', '').strip()
            images = [base_url + img['src'].replace('thumblg_', '').replace('thumbsm_', '') for img in item_soup.find('div', class_='product-imgs').find_all('img')]
            # Find the related persons span
            related_persons_span = item_soup.find('span', class_='related')

            # If the span was found, extract the related persons
            if related_persons_span is not None:
                related_persons = related_persons_span.text.replace('Related: ', '').split(',')
            else:
                related_persons = []
            
            # Print the item details
            # print(f"Person: {person}")
            # print(f"First Name: {first_name}")
            # print(f"Last Name: {last_name}")
            # print(f"Title: {title}")
            # print(f"Content: {content}")
            # print(f"Date: {date}")
            # print(f"Price: {price}")
            # print(f"Sold: {sold}")
            # print(f"Inquire: {inquire}")
            # print(f"Item Number: {item_number}")
            # print(f"Images: {images}")
            # print(f"Related Persons: {related_persons}")

            # Add a row to the list
            rows.append({
                'Person': person,
                'First Name': first_name,
                'Last Name': last_name,
                'Category': category,
                'Item URL': item_url,
                'Title': title,
                'Content': content,
                'Date': date,
                'Price': price,
                'Sold': sold,
                'Inquite': inquire,
                'Item Number': item_number,
                'Images': ', '.join(img.replace('\n', '') for img in images),
                'Related Persons': ', '.join(related_persons),
            })

            counter += 1
        # if counter > 5 : break
    # if counter > 5 : break

# Convert the list of rows to a DataFrame
df = pd.DataFrame(rows)

# Save the DataFrame to a CSV file
df.to_csv('output.csv', index=False)

