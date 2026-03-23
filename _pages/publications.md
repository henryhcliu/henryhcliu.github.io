---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

{% assign publication_tag_candidates = "robotic manipulation|robotic navigation|motion planning and control|autonomous driving" | split: "|" %}

{% for candidate in publication_tag_candidates %}
  {% assign tagged_publications = site.publications | where_exp: "item", "item.tags contains candidate" %}
  {% if tagged_publications.size > 0 %}
  <h2 id="{{ candidate | slugify }}" class="archive__subtitle">{{ candidate | capitalize }}</h2>
  {% for post in tagged_publications reversed %}
    {% include archive-single.html %}
  {% endfor %}
  {% endif %}
{% endfor %}
