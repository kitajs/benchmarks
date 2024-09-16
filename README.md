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
* __Node:__ `v20.17.0`
* __Run:__ Mon Sep 16 2024 01:27:41 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.17.0 | ✗      | 48243.2    | 20.26        | 8.60          |
| polka                    | 0.5.2    | ✓      | 47101.6    | 20.73        | 8.40          |
| connect                  | 3.7.0    | ✗      | 46603.2    | 20.95        | 8.31          |
| server-base-router       | 7.1.32   | ✓      | 46364.0    | 21.07        | 8.27          |
| fastify                  | 4.28.1   | ✓      | 46177.6    | 21.15        | 8.28          |
| rayo                     | 1.4.6    | ✓      | 46012.0    | 21.23        | 8.21          |
| kita                     | 1.1.36   | ✓      | 45868.0    | 21.30        | 8.22          |
| server-base              | 7.1.32   | ✗      | 45548.0    | 21.45        | 8.12          |
| polkadot                 | 1.0.0    | ✗      | 44878.4    | 21.79        | 8.00          |
| 0http                    | 3.5.3    | ✓      | 43539.2    | 22.47        | 7.76          |
| connect-router           | 1.3.8    | ✓      | 43507.2    | 22.48        | 7.76          |
| h3                       | 1.12.0   | ✗      | 41072.8    | 23.84        | 7.32          |
| h3-router                | 1.12.0   | ✓      | 41065.6    | 23.85        | 7.32          |
| hono                     | 4.6.1    | ✓      | 40021.6    | 24.48        | 7.14          |
| restana                  | 4.9.9    | ✓      | 39527.0    | 24.81        | 7.05          |
| koa                      | 2.15.3   | ✗      | 37715.0    | 26.03        | 6.73          |
| take-five                | 2.0.0    | ✓      | 34956.6    | 28.11        | 12.57         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34453.0    | 28.52        | 6.14          |
| restify                  | 11.1.0   | ✓      | 34172.0    | 28.76        | 6.16          |
| koa-router               | 12.0.1   | ✓      | 33996.8    | 28.92        | 6.06          |
| hapi                     | 21.3.10  | ✓      | 32063.2    | 30.67        | 5.72          |
| fastify-big-json         | 4.28.1   | ✓      | 11859.4    | 83.74        | 136.45        |
| express                  | 4.21.0   | ✓      | 10485.8    | 94.73        | 1.87          |
| express-with-middlewares | 4.21.0   | ✓      | 10062.1    | 98.78        | 3.74          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
