---
permalink: /
title: "Yukun Ethan Zhou"
seo_title: "Yukun Zhou (Yukun Ethan Zhou) - Physics-Based Simulation & Robotics"
description: "Yukun Zhou (Yukun Ethan Zhou) researches physics-based simulation, computer graphics, deformable objects, and robotics."
hide_title: true
author_profile: true
sidebar:
  nav: "home_sections"
redirect_from:
  - /about/
  - /about.html
---



> 🚧 **Work in Progress:** This website is still under development and being updated.

About Me
======

I am **Yukun Zhou**, also known as **Yukun Ethan Zhou**. My background combines physics-based simulation research, graphics engineering, game development, HCI, and applied machine learning.

I am especially interested in developing physics-based simulation algorithms and systems that are physically meaningful, computationally efficient, and useful for interactive applications, and in applying them to robotics. My research focuses on physics-based simulation and optimization for deformable objects, as well as related robotics applications.

Previously, I worked on rod insertion, soft-body projective dynamics, cutting simulation, and VBD-based optimization methods. I am currently a research assistant at [UCLA](https://www.ucla.edu/), advised by Dr. [Chenfanfu Jiang](https://www.math.ucla.edu/~cffjiang/index.html). <span style="color: #8B5A2B;">My current work focuses on cable manipulation through rod simulation with non-penetrating contact, with deployment on a Franka robot.</span>

Education
======

- **[University of Southern California](https://www.usc.edu/)**, M.S. in Computer Science - Game Development, 2023 - 2025. CGPA: 3.87 / 4.0.
- **[City University of Hong Kong](https://www.cityu.edu.hk/en)**, B.S. in Computer Science, Minor in Creative Media, 2019 - 2023. First Class Honors; CGPA: 3.8 / 4.3; top 10%

Research Output
======

- **Manuscript under review**: Anonymous author, Yukun Zhou, and other authors. About the optimization of Vertex Block Descent. Manuscript submitted, 2026.

Research
======

<div class="research-entry" markdown="1">
**Research Assistant**<br>
University of California, Los Angeles, Los Angeles, USA<br>
Advised by Dr. [Chenfanfu Jiang](https://www.math.ucla.edu/~cffjiang/index.html), June 2026 - Present.

- Developing real-time anisotropic and elastoplastic rod simulation with non-penetrating contact for cable manipulation.
- Deploying the system on a single-arm Franka robot.

{% include media-row.html label="UCLA research" accent="cyan" media_key="research_ucla_preview" limit=2 %}

<p class="detail-link"><a href="/projects/ucla-ra/" target="_blank" rel="noopener noreferrer" data-new-tab="true">View UCLA RA project <span aria-hidden="true">&rarr;</span></a></p>
</div>

<div class="research-entry" markdown="1">
**Joint RA-PhD Track - Physics-Based Simulation**<br>
Chinese Academy of Sciences (Hong Kong Institute of Science and Innovation) and The Chinese University of Hong Kong, Hong Kong<br>
Advised by Dr. [Zhongkai Zhang](https://scholar.google.com/citations?hl=zh-CN&user=IsXcUo4AAAAJ&view_op=list_works&sortby=pubdate) and Dr. [Hongbin Liu](https://www.cair-cas.org.hk/article/29), July 2025 - June 2026.

- **Manuscript in preparation**: Yukun Zhou and other authors. Thickness-Aware Rod Insertion Simulation with Rotational Friction. Manuscript in preparation, 2026.
- Working on accurate rod-insertion simulation based on Projective Dynamics, Cosserat rods, Lagrangian constraint-based methods, thickness-aware contact pressure, and rotational friction.
- Contributed to optimization work for the Vertex Block Descent project and manuscript.
- Developed and reproduced simulation systems including SDF soft-body contact, DiSect differentiable cutting, FEM, Projective Dynamics cutting with low-rank updates, and lung puncturing simulation with Warp.
- Completed human brain 3D reconstruction from MRI images using neural networks.

{% include media-row.html label="CAS and CUHK research" accent="blue" media_key="research_cas_cuhk_preview" limit=2 %}

<p><small><em>Additional VBD images and videos are not shown because the manuscript is currently under review.</em></small></p>

<p class="detail-link"><a href="/projects/cas-cuhk-ra/" target="_blank" rel="noopener noreferrer" data-new-tab="true">View CAS and CUHK RA-PhD project <span aria-hidden="true">&rarr;</span></a></p>
</div>

<div class="research-entry" markdown="1">
**Summer Research Intern - Fluid Simulation about Neural and Particle Flow Map**<br>
Georgia Institute of Technology, Atlanta, USA<br>
Advised by Dr. [Bo Zhu](https://faculty.cc.gatech.edu/~bozhu/), June 2024 - September 2024.

- Replicated the Neural Flow Map algorithm in Taichi and developed a real-time 3D stable fluid simulation using OpenGL compute shaders.
- Accelerated Particle Flow Map simulation with long-range mapping and short-range projection, achieving an 80% speed improvement.

{% include media-row.html label="Georgia Tech research" accent="violet" media_key="research_georgia_tech" limit=2 %}
</div>

<div class="research-entry research-entry--single-media">
{% include media-row.html label="CityU research" accent="coral" media_key="research_cityu" limit=1 %}

<div class="research-entry__body" markdown="1">
**Part-time Research Assistant - HCI Research on Games and Players**<br>
City University of Hong Kong, Hong Kong<br>
Advised by Dr. [Zhicong Lu](https://www.cs.toronto.edu/~luzhc/), June 2022 - September 2023.

- Led a first-author research project on games, ICT4D, player experience, and well-being.
- Developed design implications and application scenarios for improving player well-being through game-related systems.
</div>
</div>

Projects
======

{% assign projects = site.portfolio | sort: "order" %}
<div class="project-list">
{% for project in projects %}
  {% include project-card.html project=project %}
{% endfor %}
</div>

Work Experience
======

- **Grader for [CSCI 520: Computer Animation and Simulation](https://viterbi-web.usc.edu/~jbarbic/cs520-s25/)**<br>
  University of Southern California, Los Angeles, USA<br>
  Course taught by Dr. [Jernej Barbic](https://viterbi-web.usc.edu/~jbarbic/), January 2025 - May 2025.
- **Data Science Intern (Full-time, Four Days a Week)**<br>
  Siemens Mobility, Hong Kong, June 2021 - March 2022.
  - Designed and developed map matching, route matching, traffic flow prediction algorithms, and machine-learning time-series models including bi-LSTM, encoder-decoder LSTM, and ARIMA.
  - Manipulated databases and processed data in Python to support database development and maintenance.

Awards
======

- **Entrance Full Tuition Scholarship**, City University of Hong Kong, 2019 - 2023.
- **Dean's List Awards for Outstanding Academic Performance**, City University of Hong Kong, 2019 - 2023.
