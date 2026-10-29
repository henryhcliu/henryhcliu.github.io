# Publication image sources

The homepage and Publications page share the local assets recorded in [publication_images.yml](../../_data/publication_images.yml). Each record includes descriptive alt text, its original source, a paper or project URL, the selected figure, and the sources checked.

31 entries use verified paper or author-project images. The 7 entries below use original, generic SVG illustrations because no suitable correct-paper figure was publicly accessible after checking publisher, author/project, repository, and full-text sources. These illustrations do not depict a result from the papers.

## Generic illustrations

- [Solving a Multi-robot Search Problem with Bionic Sarsa Algorithm and Artificial Potential Field](https://ieeexplore.ieee.org/document/9728613): No publicly accessible representative figure found.
- [Incremental learning-based real-time trajectory prediction for autonomous driving via sparse Gaussian process regression](https://ieeexplore.ieee.org/document/10588687): No publicly accessible representative figure found.
- [Diffeomorphism-Transformed Iterative Linear Quadratic Regulator for Constrained Motion Planning in Autonomous Driving](https://ieeexplore.ieee.org/document/11157916): Generic fallback; no publicly accessible paper figure was found.
- [Attention Distribution via Vision Language Models for Interactive Decision-Making and Motion Planning in Autonomous Driving](https://henryhcliu.github.io/publication/2026-05-ITSC): Generic topical illustration; no paper figure publicly accessible
- [Skeleton-Aware Hand-Arm Retargeting for Contact-Rich Dexterous Teleoperation](https://henryhcliu.github.io/publication/2026-06-EIR): Generic topical illustration; no paper figure publicly accessible
- [Behavioral Uncertainty-Aware Attention Allocation via VLMs for Interactive Autonomous Driving](https://ieeexplore.ieee.org/abstract/document/11608941/): Generic topical illustration; no paper figure publicly accessible
- [Potential-Game Structured Cooperative Eco-Driving for Mixed Platoons at Signalized Intersections](https://www.worldscientific.com/doi/10.1142/S2301385028500604): Generic topical illustration; no paper figure publicly accessible

## Source limitations

- **Research on Robot Visual Grabbing Based on Mechanism Analysis:** the experimental image is from the official CYBER 2021 conference digest. The publicly available source is only 136 × 78 pixels; it is retained at its native resolution.
- **An Autonomous Mobility on Demand Platform Supporting Cooperative Driving with Visual Context Generation for LMMs:** no public paper figure was found. Its thumbnail uses the actual platform demonstration image from the author’s CoDriveVis repository.

## Maintenance

Add a record keyed by the publication’s existing `permalink` in `_data/publication_images.yml`, and save its asset in this directory. Keep the original source URL and figure identification so the pairing can be checked later. Prefer a concise visual overview or experimental panel over small text. The display sizes and deliberate `object-fit: fill` stretching are defined in `_sass/_archive.scss`.
