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
* __Run:__ Mon May 25 2026 03:12:40 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 49721.6    | 19.60        | 8.87          |
| polka                    | 0.5.2    | ✓      | 47388.8    | 20.60        | 8.45          |
| connect                  | 3.7.0    | ✗      | 47302.4    | 20.66        | 8.44          |
| fastify                  | 4.29.1   | ✓      | 46844.0    | 20.84        | 8.40          |
| server-base              | 7.1.32   | ✗      | 46517.6    | 20.99        | 8.30          |
| kita                     | 1.1.36   | ✓      | 46491.2    | 20.99        | 8.34          |
| server-base-router       | 7.1.32   | ✓      | 45963.2    | 21.25        | 8.20          |
| rayo                     | 1.4.6    | ✓      | 45738.4    | 21.36        | 8.16          |
| 0http                    | 3.5.3    | ✓      | 45324.8    | 21.57        | 8.08          |
| connect-router           | 1.3.8    | ✓      | 44347.2    | 22.07        | 7.91          |
| h3-router                | 1.15.11  | ✓      | 43862.4    | 22.30        | 7.82          |
| polkadot                 | 1.0.0    | ✗      | 43451.2    | 22.52        | 7.75          |
| h3                       | 1.15.11  | ✗      | 42969.6    | 22.78        | 7.66          |
| restana                  | 4.9.9    | ✓      | 40383.2    | 24.27        | 7.20          |
| koa                      | 2.16.4   | ✗      | 38181.4    | 25.70        | 6.81          |
| hono                     | 4.12.23  | ✓      | 35864.2    | 27.38        | 5.88          |
| take-five                | 2.0.0    | ✓      | 35766.4    | 27.46        | 12.86         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35099.0    | 27.98        | 6.26          |
| restify                  | 11.1.0   | ✓      | 34063.4    | 28.85        | 6.14          |
| koa-router               | 12.0.1   | ✓      | 33538.8    | 29.30        | 5.98          |
| hapi                     | 21.4.9   | ✓      | 32334.2    | 30.42        | 5.77          |
| fastify-big-json         | 4.29.1   | ✓      | 11697.2    | 84.94        | 134.59        |
| express                  | 4.22.2   | ✓      | 10728.6    | 92.63        | 1.91          |
| express-with-middlewares | 4.22.2   | ✓      | 10371.2    | 95.82        | 3.86          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
