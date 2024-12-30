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
* __Node:__ `v20.18.1`
* __Run:__ Mon Dec 30 2024 01:29:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 46992.0    | 20.77        | 8.38          |
| kita                     | 1.1.36   | ✓      | 46812.8    | 20.86        | 8.39          |
| fastify                  | 4.29.0   | ✓      | 46287.2    | 21.08        | 8.30          |
| polka                    | 0.5.2    | ✓      | 46192.8    | 21.15        | 8.24          |
| connect                  | 3.7.0    | ✗      | 45924.8    | 21.25        | 8.19          |
| polkadot                 | 1.0.0    | ✗      | 45245.6    | 21.61        | 8.07          |
| server-base              | 7.1.32   | ✗      | 45001.6    | 21.76        | 8.02          |
| rayo                     | 1.4.6    | ✓      | 44860.0    | 21.82        | 8.00          |
| server-base-router       | 7.1.32   | ✓      | 44547.2    | 21.98        | 7.94          |
| 0http                    | 3.5.3    | ✓      | 43402.4    | 22.54        | 7.74          |
| connect-router           | 1.3.8    | ✓      | 42836.0    | 22.81        | 7.64          |
| h3-router                | 1.13.0   | ✓      | 42338.4    | 23.12        | 7.55          |
| h3                       | 1.13.0   | ✗      | 41308.8    | 23.71        | 7.37          |
| hono                     | 4.6.15   | ✓      | 40382.4    | 24.24        | 6.62          |
| restana                  | 4.9.9    | ✓      | 38387.2    | 25.55        | 6.85          |
| koa                      | 2.15.3   | ✗      | 37204.2    | 26.38        | 6.64          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34845.0    | 28.19        | 6.21          |
| take-five                | 2.0.0    | ✓      | 34790.2    | 28.26        | 12.51         |
| restify                  | 11.1.0   | ✓      | 34006.6    | 28.89        | 6.13          |
| koa-router               | 12.0.1   | ✓      | 33469.8    | 29.39        | 5.97          |
| hapi                     | 21.3.12  | ✓      | 31691.2    | 31.05        | 5.65          |
| fastify-big-json         | 4.29.0   | ✓      | 11489.0    | 86.47        | 132.19        |
| express                  | 4.21.2   | ✓      | 11195.2    | 88.75        | 2.00          |
| express-with-middlewares | 4.21.2   | ✓      | 10505.5    | 94.60        | 3.91          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
