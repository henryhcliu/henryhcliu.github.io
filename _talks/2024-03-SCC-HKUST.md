---
title: "Consensus Alternating Direction Method of Multipliers for Cooperative Motion Planning of Large-Scale Non-Holonomic Agents"
collection: talks
type: "University Seminar talk"
permalink: /talks/2024-03-SCC-HKUST
venue: "Room 2131B, HKUST, Clear Water Bay, Kowloon, Hong Kong"
date: 2024-03-18
location: "Hong Kong SAR, China"
---

In this talk, we present a cooperative motion planning problem for large-scale connected autonomous vehicles (CAVs) under limited communications, which addresses the challenges of high communication and computing resource requirements. Our proposed methodology incorporates a parallel optimization algorithm with improved consensus ADMM considering a more realistic locally connected topology network, and time complexity of O(N) is achieved by exploiting the sparsity in the dual update process. To further enhance the computational efficiency, we employ a lightweight evolution strategy for the dynamic connectivity graph of CAVs, and each sub-problem split from the consensus ADMM only requires managing a small group of CAVs. The proposed method implemented with the receding horizon scheme is validated thoroughly, and comparisons with existing numerical solvers and approaches demonstrate the efficiency of our proposed algorithm. Also, simulations on large-scale cooperative driving tasks involving 80 vehicles are performed in the high-fidelity CARLA simulator, which highlights the remarkable computational efficiency, scalability, and effectiveness of our proposed development.
