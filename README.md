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
* __Run:__ Mon Apr 06 2026 02:06:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 49008.8    | 19.92        | 8.74          |
| rayo                     | 1.4.6    | ✓      | 47616.8    | 20.49        | 8.49          |
| kita                     | 1.1.36   | ✓      | 47491.2    | 20.55        | 8.51          |
| connect                  | 3.7.0    | ✗      | 47132.0    | 20.70        | 8.40          |
| fastify                  | 4.29.1   | ✓      | 47007.2    | 20.75        | 8.43          |
| polka                    | 0.5.2    | ✓      | 46846.4    | 20.83        | 8.35          |
| server-base              | 7.1.32   | ✗      | 46114.4    | 21.18        | 8.22          |
| server-base-router       | 7.1.32   | ✓      | 45954.4    | 21.28        | 8.20          |
| polkadot                 | 1.0.0    | ✗      | 45163.2    | 21.64        | 8.05          |
| 0http                    | 3.5.3    | ✓      | 45009.6    | 21.73        | 8.03          |
| h3                       | 1.15.11  | ✗      | 43928.8    | 22.27        | 7.83          |
| connect-router           | 1.3.8    | ✓      | 43253.6    | 22.62        | 7.71          |
| h3-router                | 1.15.11  | ✓      | 43100.8    | 22.70        | 7.69          |
| restana                  | 4.9.9    | ✓      | 42438.4    | 23.06        | 7.57          |
| koa                      | 2.16.4   | ✗      | 36976.6    | 26.54        | 6.59          |
| hono                     | 4.12.10  | ✓      | 36547.0    | 26.88        | 5.99          |
| restify                  | 11.1.0   | ✓      | 36066.2    | 27.22        | 6.50          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35508.6    | 27.64        | 6.33          |
| take-five                | 2.0.0    | ✓      | 35200.6    | 27.92        | 12.66         |
| koa-router               | 12.0.1   | ✓      | 34065.0    | 28.86        | 6.07          |
| hapi                     | 21.4.8   | ✓      | 32821.4    | 29.97        | 5.85          |
| fastify-big-json         | 4.29.1   | ✓      | 11835.2    | 83.93        | 136.18        |
| express                  | 4.22.1   | ✓      | 11215.4    | 88.59        | 2.00          |
| express-with-middlewares | 4.22.1   | ✓      | 10251.8    | 96.96        | 3.81          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
