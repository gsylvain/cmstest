---
title: Analyzing the Customer Lifetime Value (CLV) and Customer Acquisition Cost (CAC) of 250 Shopify stores
date: '2017-11-14 19:53:56'
---

Customer Lifetime Value (CLV) and Customer Acquisition Costs (CAC) are 2 very important metrics that can help you answer one very simply question for your ecommerce store:

<strong>How much money can I spend on marketing to acquire a customer and still be profitable? </strong>

In this guide, we will:
<ul>
 	<li>Walk you through what CLV and CAC metrics are</li>
 	<li>Explain how CLV and CAC are used together to make business decisions</li>
 	<li>Show you recent examples of anonymous CLV and CAC metrics for 250 real ecommerce stores</li>
 	<li>Show you how to stay on top of these numbers for your own store</li>
 	<li>Offer tips on how to increase CLV and reduce CAC</li>
</ul>
If you are familiar with LTV and CAC, feel free to jump right to the good stuff [link]
<h3><strong>What is Customer Lifetime Value (CLV or LTV)?</strong></h3>
CLV is an estimated amount of profit (after operational expenses like COGS, shipping, and fulfillment but <strong>before marketing expenses</strong>) that each of your customers will bring in over the lifetime they engage with your store. Since marketing expenses can be highly variable and your expenses may change after you calculate and analyze your CLV, you will want to <a href="http://sloanreview.mit.edu/article/how-should-you-calculate-customer-lifetime-value/">leave them out of this calculation</a>.

<em> [graphic]</em>

The calculation methods for CLV vary greatly and get complex, but you can get a pretty good idea of where your store is at with the simplified model explained below. <strong>Note: there is no one way to calculate CLV! </strong>

First we want to calculate the Customer Value (CV). This tells us, on average, how much a customer is worth over a certain time period. In the analysis that follows, we will calculate all metrics across a 1 year time period.

<img class="aligncenter wp-image-208 size-full" src="https://www.ordermetrics.io/wordpress/wp-content/uploads/2017/07/CV.png" alt="" width="801" height="250" />

<strong>Customer Value (CV</strong>) = Avg. Order Profit * Purchase Frequency over a given time period.

-Note Avg. Order profit should not include marketing expenses but should include COGS, transaction fees, refunds, taxes and shipping costs.

<strong>Average. Order Revenue</strong> = [Revenue / # of orders] in a given time period

<strong>Avg. Net Profit Margin</strong> = [(Revenue – all expenses, except marketing) / Revenue] in a given time period

<strong>Purchase Frequency</strong> = [Total # of Orders / Total # Customers] in a given time period

<strong>Customer Lifetime Value (CLV) = </strong>CV * Average Customer Lifespan

<img class="size-full wp-image-210 aligncenter" src="https://www.ordermetrics.io/wordpress/wp-content/uploads/2017/07/CLV.png" alt="" width="801" height="250" />

<strong>Average Customer Lifespan </strong>= Is the amount of time you expect to retain customers, typically measured in years.  The Average customer lifespan can vary greatly on your store type, customer satisfaction, the types of products you sell, and how often your customers view or remember your brand. 3 years is a good rough number for a new but healthy ecommerce store. If you are dropshipping or have a hard time re-engaging customers with your store, you may want to use 1 year. If you have a subscription business, you would want to use a different calculation (<a href="https://www.zodiacmetrics.com/customer-lifetime-value/non-contractual-clv-calculation/">see contractual vs. non-contractual CLV methods</a>)
<h3><strong>What is Customer Acquisition Cost (CAC)?</strong></h3>
In more detail, this metric means - What does it cost in marketing expenses to acquire a customer?

Expenses you should include:

Ad Spend of all campaigns (Facebook Ads, Google Ads, print, etc)

Payroll of marketing employees

Costs related to the design of the ads

Marketing Software

Other marketing/sales expenses

<strong> </strong>
<h3><strong>How CLV and CAC are used together</strong></h3>
If CLV tells us how much the average lifetime of our customers are worth after non-marketing related expenses and the CAC tells us how much it costs us to acquire a customer, then we can use the combination of these metrics to see what we can spend on marketing to acquire a customer and remain profitable.

A useful metric is your CLV:CAC ratio

Payback period = CAC / ((annual revenue per customer) * (Gross margin in %))

Common misuses of LTV:

A common mistake is for a CLV prediction to calculate the total <a href="https://en.wikipedia.org/wiki/Revenue">revenue</a> or even <a href="https://en.wikipedia.org/wiki/Gross_margin">gross margin</a> associated with a customer. However, this can cause CLV to be multiples of their actual value, and instead need to be calculated as the full <a href="https://en.wikipedia.org/wiki/Net_profit">net profit</a> expected from the customer.

&nbsp;
<h3>Analyzing the CLV and CAC of 250 Shopify stores</h3>
Here at www.ordermetrics.io we are fortunate to work with a wide variety of ecommerce stores in many different industries. To help merchants benchmark their CLV and CAC to others, we have taken a sample of 250 Shopify merchants using our platform. All data in this analysis is anonymous to protect merchant privacy.

Sample Requirements:
<ol>
 	<li>A 'customer' is tagged by their email address. Meaning when we calculate Purchase Frequency, a customer must have ordered with the same email address to count as a repeat purchaser.</li>
 	<li>We filtered out all 'null' or blank email values (some merchants use the Shopify POS feature which does not always collect a customer email address)</li>
 	<li>Stores must have at least 300 orders year to date</li>
 	<li>All currencies have been converted to USD</li>
</ol>
<pre>[visualizer id="215"]
*Each "Store" is an anonymous Shopify store.



</pre>
http://sloanreview.mit.edu/article/how-should-you-calculate-customer-lifetime-value/

SELECT c.name, round(avg(o.sale_price)/100,2) as aov, count(o.email) as ordercount, count(distinct o.email) as cust, round(count(o.email)/count(distinct o.email)::numeric,4) as freq, round((count(o.email)/count(distinct o.email)::numeric)*(avg(o.sale_price)/100),4) as cv, round((count(o.email)/count(distinct o.email)::numeric)*(avg(o.sale_price)/100)*3,4) as ltv FROM orders o INNER JOIn clients c ON c.id = o.client_id where o.order_date &gt;= '2017-01-01' and c.paid = true AND c.uninstall_info is null AND o.email is not null AND o.cancelled = false AND o.email != '' GROUP BY c.name HAVING count(o.email) &gt; 300

&nbsp;
