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
* __Run:__ Mon Oct 14 2024 01:28:43 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 47220.8    | 20.67        | 8.42          |
| fastify                  | 4.28.1   | ✓      | 46990.4    | 20.77        | 8.42          |
| kita                     | 1.1.36   | ✓      | 46838.4    | 20.84        | 8.40          |
| bare                     | v20.17.0 | ✗      | 46705.6    | 20.91        | 8.33          |
| polka                    | 0.5.2    | ✓      | 46018.4    | 21.22        | 8.21          |
| 0http                    | 3.5.3    | ✓      | 45808.8    | 21.33        | 8.17          |
| server-base-router       | 7.1.32   | ✓      | 45620.0    | 21.42        | 8.14          |
| server-base              | 7.1.32   | ✗      | 45342.4    | 21.55        | 8.09          |
| connect                  | 3.7.0    | ✗      | 45251.2    | 21.61        | 8.07          |
| rayo                     | 1.4.6    | ✓      | 45136.0    | 21.68        | 8.05          |
| connect-router           | 1.3.8    | ✓      | 43120.0    | 22.68        | 7.69          |
| h3                       | 1.13.0   | ✗      | 41906.4    | 23.37        | 7.47          |
| h3-router                | 1.13.0   | ✓      | 41798.4    | 23.42        | 7.45          |
| restana                  | 4.9.9    | ✓      | 40475.2    | 24.20        | 7.22          |
| hono                     | 4.6.4    | ✓      | 40059.2    | 24.45        | 7.14          |
| koa                      | 2.15.3   | ✗      | 36124.6    | 27.18        | 6.44          |
| take-five                | 2.0.0    | ✓      | 34978.2    | 28.09        | 12.58         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34595.4    | 28.38        | 6.17          |
| restify                  | 11.1.0   | ✓      | 34387.6    | 28.57        | 6.20          |
| koa-router               | 12.0.1   | ✓      | 33378.2    | 29.47        | 5.95          |
| hapi                     | 21.3.10  | ✓      | 31550.4    | 31.20        | 5.63          |
| fastify-big-json         | 4.28.1   | ✓      | 11903.0    | 83.45        | 136.95        |
| express                  | 4.21.1   | ✓      | 10597.4    | 93.78        | 1.89          |
| express-with-middlewares | 4.21.1   | ✓      | 10032.0    | 99.10        | 3.73          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
