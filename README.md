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
* __Node:__ `v20.20.2`
* __Run:__ Mon Sep 14 2026 03:05:18 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 57151.2    | 16.99        | 10.19         |
| rayo                     | 1.4.6    | ✓      | 55988.8    | 17.35        | 9.98          |
| connect                  | 3.7.0    | ✗      | 55951.2    | 17.36        | 9.98          |
| kita                     | 1.1.36   | ✓      | 55660.8    | 17.45        | 9.98          |
| polka                    | 0.5.2    | ✓      | 55632.8    | 17.47        | 9.92          |
| fastify                  | 4.29.1   | ✓      | 55328.0    | 17.57        | 9.92          |
| server-base-router       | 7.1.32   | ✓      | 55144.0    | 17.63        | 9.83          |
| server-base              | 7.1.32   | ✗      | 54789.6    | 17.75        | 9.77          |
| connect-router           | 1.3.8    | ✓      | 53709.6    | 18.13        | 9.58          |
| 0http                    | 3.5.3    | ✓      | 50456.0    | 19.33        | 9.00          |
| hono                     | 4.13.7   | ✓      | 50091.2    | 19.46        | 8.22          |
| polkadot                 | 1.0.0    | ✗      | 48856.0    | 19.97        | 8.71          |
| restana                  | 4.9.9    | ✓      | 45213.6    | 21.62        | 8.06          |
| koa                      | 2.16.4   | ✗      | 45012.8    | 21.73        | 8.03          |
| h3                       | 1.15.11  | ✗      | 44365.6    | 22.05        | 7.91          |
| take-five                | 2.0.0    | ✓      | 43428.8    | 22.53        | 15.61         |
| h3-router                | 1.15.11  | ✓      | 42483.2    | 23.04        | 7.58          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 42392.0    | 23.09        | 7.56          |
| restify                  | 11.1.0   | ✓      | 42341.6    | 23.12        | 7.63          |
| koa-router               | 12.0.1   | ✓      | 40624.0    | 24.13        | 7.25          |
| hapi                     | 21.4.10  | ✓      | 37803.2    | 25.94        | 6.74          |
| express                  | 4.22.2   | ✓      | 13119.8    | 75.63        | 2.34          |
| express-with-middlewares | 4.22.2   | ✓      | 12305.6    | 80.71        | 4.58          |
| fastify-big-json         | 4.29.1   | ✓      | 11945.2    | 83.14        | 137.43        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
