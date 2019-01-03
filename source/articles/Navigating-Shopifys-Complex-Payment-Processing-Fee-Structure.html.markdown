---
title: Navigating Shopify's Complex Payment Processing Fee Structure
date: '2017-03-07 20:10:29'
tags:
- ordermetrics-io
- shopify-payments
---

For ecommerce stores looking to make the switch from platforms such as Magento or Woocommerce to Shopify, one of the most important things to take into consideration is Shopify's complex transaction fee structure. Additionally, for shops already on Shopify, it is crucial to understand your transaction fees and find ways to reduce these costs.

This guide will walk you through Shopify's transaction fees for both Shopify Payments (Shopify's internal payment processing system) and external payment gateways such as PayPal, Braintree, or Authorize.net.  Also see our <a href="https://ordermetrics.com/profit-guide/reduce-payment-processing-fees/reduce-shopify-transaction-fees/">guide to reducing Shopify Fees in the Profit Guide</a>. 
<h3>Understanding Shopify Payments</h3>
Unlike many other ecommerce platforms, Shopify offers their own payment system to merchants located in the USA, Canada, UK, Ireland and Australia. For folks based in these countries, Shopify Payments offers a convenient solution with little to no approval process, allowing you to start accepting payments immediately. Payment processing fees for Shopify payments vary based on which <a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Shopify plan</a> you are on. Additionally, each eligible country has their own fee structure.

You can see Shopify's payment fees categorized by country in the tables below:
<p style="text-align: left;"><strong>USA:</strong></p>

<table dir="ltr" style="height: 177px;" border="1" width="947" cellspacing="0" cellpadding="0"><colgroup> <col width="157" /> <col width="170" /> <col width="152" /> <col width="163" /> <col width="205" /></colgroup>
<tbody>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;USA Fixed Fee&quot;}">USA Fixed Fee</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;USA %&quot;}">USA %</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;USA In-Person %&quot;}">USA In-Person %</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;External Payment Gateway&quot;}">External Payment Gateway</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Advanced Shopify&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Advanced Shopify - $299 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.3}" data-sheets-numberformat="[null,4,&quot;\&quot;$\&quot;#,##0.00&quot;,1]">$0.30</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.024}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.40%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.024}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.40%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.005}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">0.50%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Professional (\&quot;Shopify\&quot;)&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Shopify - $79 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.3}" data-sheets-numberformat="[null,4,&quot;\&quot;$\&quot;#,##0.00&quot;,1]">$0.30</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.026}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.60%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.025}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.50%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.01}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">1.00%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Basic&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Basic Shopify - $29 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.3}" data-sheets-numberformat="[null,4,&quot;\&quot;$\&quot;#,##0.00&quot;,1]">$0.30</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.029}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.90%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.027}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.70%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.02}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.00%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Shopify Plus&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Shopify Plus -Negotiable</a></td>
<td style="text-align: center;" colspan="4" rowspan="1" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Negotiable&quot;}">Negotiable</td>
</tr>
</tbody>
</table>
<strong>Canada:</strong>
<table dir="ltr" style="height: 177px;" border="1" width="1124" cellspacing="0" cellpadding="0"><colgroup> <col width="157" /> <col width="170" /> <col width="152" /> <col width="163" /> <col width="205" /> <col width="181" /></colgroup>
<tbody>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;CA Fixed Fee&quot;}">CA Fixed Fee</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;CA Domestic Online %&quot;}">CA Domestic Online %</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;CA Intl / Amex Online %&quot;}">CA Intl*/Amex Online %</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;CA In-person %&quot;}">CA In-person %</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;External Payment Gateway&quot;}">External Payment Gateway</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Advanced Shopify&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Advanced Shopify - $299 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.3}" data-sheets-numberformat="[null,4,&quot;\&quot;$\&quot;#,##0.00&quot;,1]">$0.30</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.024}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.40%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.033}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">3.30%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.024}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.40%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.005}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">0.50%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Professional (\&quot;Shopify\&quot;)&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Shopify - $79 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.3}" data-sheets-numberformat="[null,4,&quot;\&quot;$\&quot;#,##0.00&quot;,1]">$0.30</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.027}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.70%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.034}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">3.40%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.026}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.60%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.01}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">1.00%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Basic&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Basic Shopify - $29 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.3}" data-sheets-numberformat="[null,4,&quot;\&quot;$\&quot;#,##0.00&quot;,1]">$0.30</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.029}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.90%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.035}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">3.50%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.027}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.70%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.02}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.00%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Shopify Plus&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Shopify Plus -Negotiable</a></td>
<td style="text-align: center;" colspan="5" rowspan="1" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Negotiable&quot;}">Negotiable</td>
</tr>
</tbody>
</table>
*The Intl fee column is applied when a customer's credit card is located from a country outside of Canada

<strong>Australia:</strong>
<table dir="ltr" style="height: 178px;" border="1" width="945" cellspacing="0" cellpadding="0"><colgroup> <col width="157" /> <col width="170" /> <col width="152" /> <col width="163" /> <col width="205" /></colgroup>
<tbody>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;AU Fixed Fee&quot;}">AU Fixed Fee</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;AU Domestic Online %&quot;}">AU Domestic Online %</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;AU Intl / Amex Online %&quot;}">AU Intl*/Amex Online %</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;External Payment Gateway&quot;}">External Payment Gateway</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Advanced Shopify&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Advanced Shopify - $299 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.3}" data-sheets-numberformat="[null,4,&quot;\&quot;$\&quot;#,##0.00&quot;,1]">$0.30</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.014}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">1.40%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.027}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.70%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.005}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">0.50%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Professional (\&quot;Shopify\&quot;)&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Shopify - $79 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.3}" data-sheets-numberformat="[null,4,&quot;\&quot;$\&quot;#,##0.00&quot;,1]">$0.30</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.016}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">1.60%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.028}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.80%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.01}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">1.00%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Basic&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Basic Shopify - $29 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.3}" data-sheets-numberformat="[null,4,&quot;\&quot;$\&quot;#,##0.00&quot;,1]">$0.30</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.0175}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">1.75%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.029}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.90%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.02}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.00%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Shopify Plus&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Shopify Plus -Negotiable</a></td>
<td style="text-align: center;" colspan="4" rowspan="1" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Negotiable&quot;}">Negotiable</td>
</tr>
</tbody>
</table>
*The Intl fee column is applied when a customer's credit card is located from a country outside of Australia
<strong> United Kingdom:</strong>
<table dir="ltr" style="height: 177px;" border="1" width="945" cellspacing="0" cellpadding="0"><colgroup> <col width="157" /> <col width="170" /> <col width="152" /> <col width="163" /> <col width="205" /></colgroup>
<tbody>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;UK Fixed Fee&quot;}">UK Fixed Fee</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;UK Online %&quot;}">UK Online %</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;UK In-Person %&quot;}">UK In-Person %</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;External Payment Gateway&quot;}">External Payment Gateway</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Advanced Shopify&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Advanced Shopify - $299 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;\u00a30.20&quot;}">£0.20</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.016}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">1.60%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.016}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">1.60%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.005}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">0.50%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Professional (\&quot;Shopify\&quot;)&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Shopify - $79 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;\u00a30.20&quot;}">£0.20</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.019}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">1.90%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.022}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.20%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.01}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">1.00%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Basic&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Basic Shopify - $29 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;\u00a30.20&quot;}">£0.20</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.022}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.20%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.027}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.70%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.02}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.00%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Shopify Plus&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Shopify Plus -Negotiable</a></td>
<td style="text-align: center;" colspan="4" rowspan="1" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Negotiable&quot;}">Negotiable</td>
</tr>
</tbody>
</table>
<strong>Ireland:</strong>
<table dir="ltr" style="height: 177px;" border="1" width="945" cellspacing="0" cellpadding="0"><colgroup> <col width="157" /> <col width="170" /> <col width="152" /> <col width="163" /> <col width="205" /></colgroup>
<tbody>
<tr>
<td style="text-align: center;"></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Ireland Online Fixed Fee*&quot;}">Ireland Online Fixed Fee*</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Ireland Online %*&quot;}">Ireland Online %*</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Ireland In-Person %*&quot;}">Ireland In-Person %*</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;External Payment Gateway&quot;}">External Payment Gateway</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Advanced Shopify&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Advanced Shopify - $299 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;\u00a30.25&quot;}">£0.25</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.016}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">1.60%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.016}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">1.60%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.005}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">0.50%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Professional (\&quot;Shopify\&quot;)&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Shopify - $79 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;\u00a30.25&quot;}">£0.25</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.019}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">1.90%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.022}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.20%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.01}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">1.00%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Basic&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Basic Shopify - $29 / month</a></td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;\u00a30.25&quot;}">£0.25</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.022}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.20%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.027}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.70%</td>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:3,&quot;3&quot;:0.02}" data-sheets-numberformat="[null,3,&quot;0.00%&quot;,1]">2.00%</td>
</tr>
<tr>
<td style="text-align: center;" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Shopify Plus&quot;}"><a href="https://www.shopify.com/pricing/?ref=developer-b7007c8d686ad62b" target="_blank" rel="noopener noreferrer">Shopify Plus -Negotiable</a></td>
<td style="text-align: center;" colspan="4" rowspan="1" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Negotiable&quot;}">Negotiable</td>
</tr>
</tbody>
</table>
<span data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;* Ireland must include 23% VAT&quot;}" data-sheets-userformat="{&quot;2&quot;:8403841,&quot;3&quot;:{&quot;1&quot;:0},&quot;10&quot;:2,&quot;11&quot;:0,&quot;12&quot;:0,&quot;14&quot;:{&quot;1&quot;:2,&quot;2&quot;:0},&quot;15&quot;:&quot;Calibri, sans-serif&quot;,&quot;16&quot;:12,&quot;26&quot;:400}">* Ireland must include 23% VAT</span>

You may have noticed a field in the right column called "External Gateway Shopify Fee". This is an additional fee - charged by Shopify - for using an external payment gateway such as PayPal for a given transaction. For example, if you are on the Basic Shopify plan and PayPal is used for a transaction on your Shopify store, you would be charged PayPal's fee (typically 2.9% + $0.30) + Shopify's Basic plan external gateway fee of 1%, for a total of 3.9% + $0.30 for that transaction.
<h3>Keeping track of transaction fees</h3>
Keeping track these fees can be very tricky, especially if you use multiple payment gateways. Fortunately, we have built a feature within our Shopify app, <a href="https://apps.shopify.com/order-metrics-profit-analytics?utm_source=blog&amp;utm_campaign=transaction-fees" target="_blank" rel="noopener noreferrer">Order Metrics</a>, which tracks your transaction fees on a per order basis and supports multi payment gateway usage.
<h5>Order Metrics calculates total transaction fees for your Shopify store</h5>
[caption id="attachment_111" align="alignnone" width="730"]<a href="https://apps.shopify.com/order-metrics-profit-analytics?utm_source=blog&amp;utm_campaign=transaction-fees" target="_blank" rel="noopener noreferrer"><img class="wp-image-111 size-large" src="http://www.ordermetrics.io/wordpress/wp-content/uploads/2017/03/Screen-Shot-2017-03-07-at-10.43.10-AM-1024x479.png" alt="" width="730" height="341" /></a> View transaction fee totals over a specified date range[/caption]
<h5>Order Metrics calculates transaction fees for each order</h5>
[caption id="attachment_113" align="alignnone" width="681"]<a href="https://apps.shopify.com/order-metrics-profit-analytics?utm_source=blog&amp;utm_campaign=transaction-fees" target="_blank" rel="noopener noreferrer"><img class="wp-image-113 size-full" src="http://www.ordermetrics.io/wordpress/wp-content/uploads/2017/03/Screen-Shot-2017-03-07-at-10.40.55-AM-1.png" alt="" width="681" height="483" /></a> View transaction fees for each order based off which payment gateway was used[/caption]
<h5>Transaction fees can vary by payment gateway</h5>
[caption id="attachment_106" align="alignnone" width="634"]<a href="https://apps.shopify.com/order-metrics-profit-analytics?utm_source=blog&amp;utm_campaign=transaction-fees" target="_blank" rel="noopener noreferrer"><img class="wp-image-106 size-full" src="http://www.ordermetrics.io/wordpress/wp-content/uploads/2017/03/Screen-Shot-2017-03-06-at-4.53.37-PM.png" alt="" width="634" height="424" /></a> Enter custom processing rates for each payment gateway in Order Metrics[/caption]

For more details visit <a href="http://ordermetrics.io?utm_source=blog&amp;utm_campaign=transaction-fees" target="_blank" rel="noopener noreferrer">www.ordermetrics.io</a> or <a href="https://apps.shopify.com/order-metrics-profit-analytics?utm_source=blog&amp;utm_campaign=transaction-fees" target="_blank" rel="noopener noreferrer">apps.shopify.com/order-metrics-profit-analytics</a>
<h3>Tips to reduce transaction fees</h3>
<ol>
 	<li><strong>If you are an international company</strong> where Shopify Payments is not available, try incorporating through <a href="https://stripe.com/atlas" target="_blank" rel="noopener noreferrer">Stripe Atlas</a> to create a US entity so you can use Shopify Payments, thus reducing the additional payment gateway fee. *Note that we have not attempted this so there no guarantees that it will work. Please let us know if this has worked for you.</li>
 	<li><strong>Use a service like <a href="https://www.withkash.com" target="_blank" rel="noopener noreferrer">Kash</a></strong> which lets customers pay with their bank account instead of credit card. Transactions made with bank accounts have significantly less fees than credit card transactions</li>
 	<li><strong>Negotiate.</strong> The larger plan you are on, the more power you have to negotiate with Shopify and other payment providers. If your transaction volume is high enough, you may want to consider increasing your Shopify plan size to get a lower processing rate.</li>
</ol>

<hr />

Order Metrics is the best way to monitor and improve your ecommerce store's profitability. We offer a 14-day free trial and very reasonable pricing. Start your free trial today on the Shopify app store - <a href="https://apps.shopify.com/order-metrics-profit-analytics?utm_source=blog&amp;utm_campaign=transaction-fees" target="_blank" rel="noopener noreferrer">apps.shopify.com/order-metrics-profit-analytics</a>
<h1>Join the <a href="https://www.facebook.com/groups/ordermetrics/" target="_blank" rel="noopener noreferrer">Order Metrics Facebook Group</a></h1>
<a href="https://www.facebook.com/groups/ordermetrics/" target="_blank" rel="noopener noreferrer"><img class="alignleft wp-image-270 size-full" src="https://www.ordermetrics.io/wordpress/wp-content/uploads/2017/09/facebook-e1506716574831.png" alt="" width="645" height="214" /></a>
