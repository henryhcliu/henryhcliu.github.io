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

Welcome! I'm **Haichao Liu** (刘海超), a Postdoctoral Research Fellow in the [Perception and embodied INtElligence (PINE) Lab](https://pine-lab-ntu.github.io/) at the School of EEE, [Nanyang Technological University](https://www.ntu.edu.sg/), supervised by Prof. [Ziwei Wang](https://scholar.google.com/citations?user=cMTW09EAAAAJ). My research develops embodied-intelligence and autonomous-driving systems that connect multimodal reasoning with decision-making, motion planning, control, and real-world robotic interaction.

I contribute to academic leadership and professional service as an area chair, senior reviewer, session chair/co-chair, committee member, and organizer of international robotics challenges. Previously, I was a visiting scholar at the [National University of Singapore](https://www.nus.edu.sg/) under Prof. [Tong Heng Lee](https://scholar.google.com.sg/citations?user=dP8oLwYAAAAJ) and a part-time research scientist with the Autonomous Systems and Robotics Group at [A*STAR](https://www.a-star.edu.sg/) ARTC.

I received my PhD from [The Hong Kong University of Science and Technology](https://hkust.edu.hk/), advised by Prof. [Jun Ma](https://scholar.google.com/citations?user=8VepsVAAAAAJ) and Prof. [Shaojie Shen](https://scholar.google.com/citations?user=u8Q0_xsAAAAJ). I earned my Master's degree from [Harbin Institute of Technology](http://en.hit.edu.cn/), supervised by Prof. [Huijun Gao](https://scholar.google.com.hk/citations?user=2DdpHLEAAAAJ&hl=en) and Prof. [Weiyang Lin](https://scholar.google.com/citations?user=BJ610OkAAAAJ&hl=en), and my Bachelor's degree in Robot Engineering from [Northeastern University](https://english.neu.edu.cn/). I also participated in a Postgraduate Study Abroad Program at [The University of Sydney](https://www.sydney.edu.au/).

I welcome research discussions and potential collaborations. Please feel free to contact me at <haichao.liu@ntu.edu.sg>.

<div class="notice--info" markdown="1">
#### 🤖 2nd RoCo Challenge @ IROS 2026
I am excited to invite students, researchers, and industry teams to join the **2nd Robotic Collaborative Assembly (RoCo) Challenge @ IROS 2026** in Pittsburgh, USA (Sep 27 - 30, 2026)!

RoCo evaluates Physical AI systems on robotic assembly with two tracks:
* 🏭 **Industrial Board Assembly** (connector insertion, wire routing, screw tightening, battery assembly, etc.)
* 🧱 **Brick Assembly** (customized LEGO structure construction)

If you are interested in dexterous manipulation, long-horizon reasoning, and generalizable robot intelligence, this challenge is for you.

* 🧪 **Simulation phase:** June - August 2026
* 📍 **Onsite finals:** IROS 2026, Pittsburgh, USA
* 🏆 **Prize pool:** $20K+ (tentative)

Join us and register here: [🚀 2nd RoCo Challenge @ IROS 2026](https://rocochallenge.github.io/RoCo-IROS2026/)

Quick links:
* 📝 [Registration Form](https://forms.gle/d2NKNAE7dqSfYZB87)
* ❓ [FAQ](https://rocochallenge.github.io/RoCo-IROS2026/faq.html)
* 💬 [Discord Community](https://discord.gg/BvxEN5vAh3)
</div>

Research Interests
======
My research interests include the areas of **Robotics** and **Autonomous Driving**, with focus on: 
* Dexterous Robot Manipulation with Open-vocabulary Commands,
* Decision-making, Planning and Control for Autonomous Driving,

with the following technologies:
* Large Multimodal Language Models,
* Reinforcement learning and imitation learning,
* Convex and non-convex optimization.

Academic and Professional Service
======
* **Peer Reviewer:** IEEE Transactions on Cybernetics, IEEE Transactions on Intelligent Transportation Systems, IEEE Transactions on Vehicular Technology, IEEE RA-L, Nature-Discover Robotics, IEEE Robotics and Automation Magazine, Journal of Field Robotics, Aerospace Science and Technology, PLOS ONE, ICRA, IROS, IV Symposium, ITSC, ROBIO, IECON, etc.
* **Senior Reviewer:** IEEE Robotics and Automation Society Young Reviewer Program (YRP)
* **Session Chair/Co-Chair:** ITSC 2025, IROS 2025, IROS 2026
* **Area Chair:** [EIR 2026](https://www.eir2026.org/)
* **Committee Member:** [AIAAT 2026](https://aiaat.org/) (Kunming, China), [AMLDS 2026](https://amlds.site/) (Osaka, Japan), [AMLDS 2027](https://amlds.site/index.html) (Aizu-Wakamatsu, Japan)
* **Overall PiC** for [1st Robotic Collaborative (RoCo) Assembling Challenge for Human-Centered Manufacturing](https://rocochallenge.github.io/RoCo2026/) at [AAAI 2026](https://aaai.org/conference/aaai/aaai-26/)
* **Other Services:**
  * President of NTU EEE Research Staff Association (RSA)
  * Vice President of HKUST-GSAA
  * Senate Committee Member of HKUST(GZ)

Publications
======
### Featured Publications

{% assign featured_publication_paths = "/publication/2026-06-arXiv|/publication/2026-02-arXiv|/publication/2026-03-arXiv-1|/publication/2025-06-IROS-2|/publication/2025-06-IROS-1|/publication/2025-03-T-ITS|/publication/2024-04-T-IV" | split: "|" %}
<ul>
  {% for featured_path in featured_publication_paths %}
    {% assign post = site.publications | where: "permalink", featured_path | first %}
    {% if post %}
      {% include archive-single-cv.html show_tags=false %}
    {% endif %}
  {% endfor %}
</ul>

### Complete Publication List

{% assign publication_tag_candidates = "" | split: "" %}
{% for post in site.publications %}
  {% if post.tags %}
    {% assign publication_tag_candidates = publication_tag_candidates | concat: post.tags %}
  {% endif %}
{% endfor %}
{% assign publication_tag_candidates = publication_tag_candidates | uniq | sort %}
{% assign publication_tag_priority = "robotic manipulation|robot navigation|motion planning and control|autonomous driving" | split: "|" %}
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
* **Judge Appreciation Certificate**, Ministry of Education of Singapore
* **Certificate of Appreciation**, Senate of HKUST(GZ)
* **Outstanding Volunteer Award**, CyberC, IEEE
* **Winning Team (1st place) of the Venture Capital on Campus**, HKSTP
* **HKUST Postgraduate Scholarship (Guangzhou Pilot Scheme)**, Hong Kong University of Science and Technology
* **Outstanding Graduate**, Harbin Institute of Technology
* **Chiang Chen Oversea Research Scholarship**, Chiang Chen Industrial Charity Foundation
* **He Gao Scholarship**, Robotics Institute, Harbin Institute of Technology
* **Chiang Chen Scholarship**, School of Mechatronics Engineering, Harbin Institute of Technology
* **Outstanding League Cadre**, Harbin Institute of Technology
* **First-class Scholarship for PG**, Harbin Institute of Technology
* **Outstanding UG Graduation Thesis**, Faculty of Robot Science and Engineering, NEU
* **Outstanding Graduate (Cadre)**, Northeastern University
* **First-class Scholarship for UG**, Northeastern University
* **National Inspirational Scholarship**, Ministry of Education of P.R. China
* **Outstanding Student**, Northeastern University
* **Michelin Scholarship**, Northeastern University
* **Second Prize of the China University Mathematical Contest in Modeling (CUMCM)**, China Society for Industrial and Applied Mathematics
