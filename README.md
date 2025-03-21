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
* __Node:__ `v20.18.3`
* __Run:__ Mon Mar 17 2025 01:31:59 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.3 | ✗      | 48011.2    | 20.34        | 8.56          |
| kita                     | 1.1.36   | ✓      | 47396.8    | 20.60        | 8.50          |
| polkadot                 | 1.0.0    | ✗      | 47352.0    | 20.62        | 8.44          |
| fastify                  | 4.29.0   | ✓      | 46624.8    | 20.93        | 8.36          |
| polka                    | 0.5.2    | ✓      | 46205.6    | 21.13        | 8.24          |
| rayo                     | 1.4.6    | ✓      | 45640.0    | 21.42        | 8.14          |
| 0http                    | 3.5.3    | ✓      | 45458.4    | 21.50        | 8.11          |
| connect                  | 3.7.0    | ✗      | 45324.0    | 21.57        | 8.08          |
| server-base-router       | 7.1.32   | ✓      | 45193.6    | 21.63        | 8.06          |
| h3                       | 1.15.1   | ✗      | 44737.6    | 21.85        | 7.98          |
| server-base              | 7.1.32   | ✗      | 44543.2    | 21.95        | 7.94          |
| connect-router           | 1.3.8    | ✓      | 43272.8    | 22.59        | 7.72          |
| h3-router                | 1.15.1   | ✓      | 43071.2    | 22.72        | 7.68          |
| hono                     | 4.7.4    | ✓      | 41117.6    | 23.82        | 6.74          |
| restana                  | 4.9.9    | ✓      | 39655.8    | 24.72        | 7.07          |
| koa                      | 2.16.0   | ✗      | 37747.0    | 25.99        | 6.73          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35893.8    | 27.35        | 6.40          |
| restify                  | 11.1.0   | ✓      | 34952.8    | 28.10        | 6.30          |
| take-five                | 2.0.0    | ✓      | 34625.8    | 28.38        | 12.45         |
| koa-router               | 12.0.1   | ✓      | 34417.0    | 28.55        | 6.14          |
| hapi                     | 21.4.0   | ✓      | 32457.8    | 30.30        | 5.79          |
| fastify-big-json         | 4.29.0   | ✓      | 12179.6    | 81.54        | 140.12        |
| express                  | 4.21.2   | ✓      | 11406.4    | 87.09        | 2.03          |
| express-with-middlewares | 4.21.2   | ✓      | 10488.2    | 94.75        | 3.90          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
