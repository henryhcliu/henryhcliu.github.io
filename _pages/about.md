---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
description: The homepage of Haichao Liu, Postdoctoral Research Fellow at Nanyang Technological University.
---

Welcome! I'm **Haichao Liu** (刘海超), currently a Postdoctoral Research Fellow in [Perception and embodied INtElligence (PINE) Lab](https://pine-lab-ntu.github.io/) at EEE of [Nanyang Technological University](https://www.ntu.edu.sg/) (2025.9 - Present), supervised by Prof. [Ziwei Wang](https://scholar.google.com/citations?user=cMTW09EAAAAJ).

I was a visiting scholar (2025.2 - 2025.8) in the Mechatronics and Automation Lab at ECE of the [National University of Singapore](https://www.nus.edu.sg/), where I was supervised by Prof. [Tong Heng Lee](https://scholar.google.com.sg/citations?user=dP8oLwYAAAAJ). I was also honored to be attached to the Autonomous Systems and Robotics (ASR) Group at [A*STAR](https://www.a-star.edu.sg/) ARTC as a part-time research scientist.

I received my PhD degree from [The Hong Kong University of Science and Technology](https://hkust.edu.hk/) (2022.8 - 2025.8), when I was in the Robot Motion Planning and Control Lab, under the guidance of Prof. [Jun Ma](https://scholar.google.com/citations?user=8VepsVAAAAAJ) and Prof. [Shaojie Shen](https://scholar.google.com/citations?user=u8Q0_xsAAAAJ).

Previously, I earned my Master's degree from the Institute of Intelligent Control and Systems and the State Key Laboratory of Robotics and System at [Harbin Institute of Technology](http://en.hit.edu.cn/) (2020.8 - 2022.7), where I was supervised by Prof. [Huijun Gao](https://scholar.google.com.hk/citations?user=2DdpHLEAAAAJ&hl=en) and Prof. [Weiyang Lin](https://scholar.google.com/citations?user=BJ610OkAAAAJ&hl=en).

I also participated in a Postgraduate Study Abroad Program at the School of Mathematics and Statistics at [The University of Sydney](https://www.sydney.edu.au/) (2021.8 - 2022.1). My academic journey began with a Bachelor's degree in Robot Engineering from [Northeastern University](https://english.neu.edu.cn/) (2016.9 - 2020.7), within the Faculty of Robot Science and Engineering.

I am always open to discussions or potential collaborations, please feel free to contact me at <haichao.liu@connect.ust.hk>. 

Research Interests
======
My research interests include the areas of **Robotics** and **Autonomous Driving**, with focus on: 
* Dexterous Robot Manipulation with Open-vocabulary Commands,
* Decision-making, Planning and Control for Autonomous Driving,

with the following technologies:
* Large Multimodal Language Models,
* Reinforcement learning and imitation learning,
* Convex and non-convex optimization.

Publications
======
{% assign publication_tag_candidates = "" | split: "" %}
{% for post in site.publications %}
  {% if post.tags %}
    {% assign publication_tag_candidates = publication_tag_candidates | concat: post.tags %}
  {% endif %}
{% endfor %}
{% assign publication_tag_candidates = publication_tag_candidates | uniq | sort %}
{% assign publication_tag_priority = "robotic manipulation|robotic navigation|motion planning and control|autonomous driving" | split: "|" %}
{% assign ordered_publication_tags = "" | split: "" %}
{% for priority_tag in publication_tag_priority %}
  {% if publication_tag_candidates contains priority_tag %}
    {% assign priority_tag_array = priority_tag | split: "|||" %}
    {% assign ordered_publication_tags = ordered_publication_tags | concat: priority_tag_array %}
  {% endif %}
{% endfor %}
{% for tag in publication_tag_candidates %}
  {% unless publication_tag_priority contains tag %}
    {% assign tag_array = tag | split: "|||" %}
    {% assign ordered_publication_tags = ordered_publication_tags | concat: tag_array %}
  {% endunless %}
{% endfor %}
{% assign publication_tag_candidates = ordered_publication_tags %}

<div class="publication-tabs" role="tablist" aria-label="Publication categories">
  <button class="publication-tabs__tab is-active" type="button" role="tab" aria-selected="true" data-publication-tag="all">All Papers</button>
  {% for candidate in publication_tag_candidates %}
    {% assign tagged_publications = site.publications | where_exp: "item", "item.tags contains candidate" %}
    {% if tagged_publications.size > 0 %}
      <button class="publication-tabs__tab" type="button" role="tab" aria-selected="false" data-publication-tag="{{ candidate | slugify }}">{{ candidate }}</button>
    {% endif %}
  {% endfor %}
</div>

<div class="publication-categories">
  <section class="publication-category publication-category--all" data-publication-tag="all">
    <h3 id="all-papers">All Papers</h3>
    <ul>
      {% for post in site.publications reversed %}
        {% include archive-single-cv.html show_tags=false %}
      {% endfor %}
    </ul>
  </section>

  {% for candidate in publication_tag_candidates %}
    {% assign tagged_publications = site.publications | where_exp: "item", "item.tags contains candidate" %}
    {% if tagged_publications.size > 0 %}
      <section class="publication-category" data-publication-tag="{{ candidate | slugify }}">
        <h3 id="{{ candidate | slugify }}">{{ candidate | capitalize }}</h3>
        <ul>
          {% for post in tagged_publications reversed %}
            {% include archive-single-cv.html show_tags=false %}
          {% endfor %}
        </ul>
      </section>
    {% endif %}
  {% endfor %}
</div>

Internship
======
* Part-time Research Assistant for a multimodal media research project, Department of Marketing, [The Hong Kong University of Science and Technology](https://www.ust.hk/)
* Industrial Robot R&D, [Siasun Robot&Automation Co., Ltd](https://www.siasun.com/) from [Shenyang Institute of Automation](http://www.sia.cas.cn/), Chinese Academy of Sciences

Selected Honors
======
* **Judge Appreciation Certificate**, 2026, Ministry of Education of Singapore
* **Certificate of Appreciation**, 2025, Senate of HKUST(GZ)
* **Outstanding Volunteer Award**, 2024, CyberC, IEEE
* **Winning Team (1st place) of the Venture Capital on Campus**, 2024, HKSTP
* **HKUST Postgraduate Scholarship (Guangzhou Pilot Scheme)**, 2022, Hong Kong University of Science and Technology
* **Outstanding Graduate**, 2022, Harbin Institute of Technology
* **Chiang Chen Oversea Research Scholarship**, 2022, Chiang Chen Industrial Charity Foundation 
* **He Gao Scholarship**, 2021, Robotics Institute, Harbin Institute of Technology
* **Chiang Chen Scholarship**, 2021, School of Mechatronics Engineering, Harbin Institute of Technology
* **Outstanding League Cadre**, 2021, Harbin Institute of Technology
* **First-class Scholarship for PG**, 2020, 2021, Harbin Institute of Technology
* **Outstanding UG Graduation Thesis**, 2020, Faculty of Robot Science and Engineering, NEU
* **Outstanding Graduate (Cadre)**, 2020, Northeastern University
* **First-class Scholarship for UG**, 2020, Northeastern University
* **National Inspirational Scholarship**, 2017, 2018, 2019, Ministry of Education of P.R. China
* **Outstanding Student**, 2017, 2018, 2019, Northeastern University
* **Michelin Scholarship**, 2017, Northeastern University
* **Second Prize of the China University Mathematical Contest in Modeling (CUMCM)**, 2018, China Society for Industrial and Applied Mathematics

Community Services
======
* **Peer Reviewer:** IEEE Transactions on Cybernetics, IEEE Transactions on Intelligent Transportation Systems, IEEE Transactions on Vehicular Technology, IEEE Robotics and Automation Magazine, Journal of Field Robotics, Aerospace Science and Technology, PLOS ONE, IV Symposium, ICRA, IROS, ROBIO, IECON, etc.
* **Session Chair/Co-Chair:** ITSC 2025, IROS 2025
* **Committee Member:** AIAAT 2026
* **Overall PiC** for [1st Robotic Collaborative (RoCo) Assembling Challenge for Human-Centered Manufacturing](https://rocochallenge.github.io/RoCo2026/) at [AAAI 2026](https://aaai.org/conference/aaai/aaai-26/)
* **Other Services:** 
  * Member of NTU EEE Research Staff Association (RSA) (2025-)
  * Vice President of HKUST-GSAA (2024-2025)
  * Senate Committee Member of HKUST(GZ) (2024-2025)
