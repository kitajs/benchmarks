<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.13.1`
* __Run:__ Mon May 27 2024 01:17:48 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.13.1 | ✗      | 46440.8    | 21.03        | 8.28          |
| connect                  | 3.7.0    | ✗      | 45683.2    | 21.37        | 8.15          |
| rayo                     | 1.4.6    | ✓      | 45528.8    | 21.45        | 8.12          |
| kita                     | 1.1.36   | ✓      | 45447.2    | 21.47        | 8.15          |
| server-base-router       | 7.1.32   | ✓      | 45438.4    | 21.52        | 8.10          |
| fastify                  | 4.27.0   | ✓      | 45426.4    | 21.50        | 8.14          |
| polka                    | 0.5.2    | ✓      | 45197.6    | 21.62        | 8.06          |
| polkadot                 | 1.0.0    | ✗      | 45000.0    | 21.73        | 8.02          |
| 0http                    | 3.5.3    | ✓      | 44625.6    | 21.91        | 7.96          |
| server-base              | 7.1.32   | ✗      | 44274.4    | 22.09        | 7.90          |
| h3                       | 1.11.1   | ✗      | 43450.4    | 22.52        | 7.75          |
| connect-router           | 1.3.8    | ✓      | 43002.4    | 22.74        | 7.67          |
| h3-router                | 1.11.1   | ✓      | 40945.6    | 23.92        | 7.30          |
| hono                     | 4.3.11   | ✓      | 39873.6    | 24.59        | 7.11          |
| restana                  | 4.9.9    | ✓      | 39612.8    | 24.74        | 7.06          |
| koa                      | 2.15.3   | ✗      | 37164.0    | 26.42        | 6.63          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34826.6    | 28.20        | 6.21          |
| take-five                | 2.0.0    | ✓      | 34590.6    | 28.42        | 12.44         |
| restify                  | 11.1.0   | ✓      | 34520.0    | 28.45        | 6.22          |
| koa-router               | 12.0.1   | ✓      | 33851.6    | 29.03        | 6.04          |
| hapi                     | 21.3.9   | ✓      | 31640.8    | 31.08        | 5.64          |
| fastify-big-json         | 4.27.0   | ✓      | 11692.2    | 84.97        | 134.52        |
| express                  | 4.19.2   | ✓      | 11068.6    | 89.76        | 1.97          |
| express-with-middlewares | 4.19.2   | ✓      | 10175.4    | 97.65        | 3.78          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
